import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const { dark, toggleTheme } = useTheme();
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll across routes
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleNavLinkClick = (id, title) => {
    setActive(title);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='dark:text-white text-gray-900 text-[18px] font-bold cursor-pointer flex '>
            Simamnkele &nbsp;
            <span className='sm:block hidden'> Mlisana</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "dark:text-white text-gray-900" : "text-secondary"
              } dark:hover:text-white hover:text-gray-900 text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavLinkClick(nav.id, nav.title)}
            >
              <span>{nav.title}</span>
            </li>
          ))}

          {/* Theme toggle */}
          <li
            className="cursor-pointer text-[22px] select-none"
            onClick={toggleTheme}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? "☀️" : "🌙"}
          </li>

          {/* CV Button */}
          <li
            className="bg-tertiary py-2 px-5 dark:text-white text-gray-900 font-bold shadow-md shadow-primary rounded-xl cursor-pointer dark:hover:bg-[#1d1836] hover:bg-[#d5cfff] transition-colors"
            onClick={() => setShowCV(true)}
          >
            Show CV
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "dark:text-white text-gray-900" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    handleNavLinkClick(nav.id, nav.title);
                  }}
                >
                  <span>{nav.title}</span>
                </li>
              ))}
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-secondary"
                onClick={() => {
                  setToggle(false);
                  setShowCV(true);
                }}
              >
                Show CV
              </li>
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-secondary select-none"
                onClick={() => {
                  setToggle(false);
                  toggleTheme();
                }}
              >
                {dark ? "☀️ Light mode" : "🌙 Dark mode"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* CV Preview Modal */}
      {showCV && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setShowCV(false)}
        >
          <div
            className="dark:bg-[#1d1836] bg-white rounded-2xl w-full sm:max-w-2xl md:max-w-3xl xl:max-w-4xl flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b dark:border-white/10 border-gray-200">
              <h3 className="dark:text-white text-gray-900 text-[18px] font-bold">My CV</h3>
              <button
                onClick={() => setShowCV(false)}
                className="text-secondary dark:hover:text-white hover:text-gray-900 text-2xl font-bold leading-none"
              >
                ×
              </button>
            </div>

            <div className="w-full" style={{ height: "75vh" }}>
              <iframe
                src="/Simamnkele-Mlisana-Resume.pdf"
                title="CV Preview"
                className="w-full h-full rounded-none"
              />
            </div>

            <div className="flex justify-end px-6 py-4 border-t dark:border-white/10 border-gray-200">
              <a
                href="/Simamnkele-Mlisana-Resume.pdf"
                download="Simamnkele-Mlisana-Resume.pdf"
                className="bg-tertiary py-2 px-6 text-white font-bold rounded-xl hover:bg-[#0a0a0a] transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;