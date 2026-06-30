import "./globals.css";

export const metadata = {
  title: "Resume of Simamnkele",
  description: "Portfolio of Simamnkele Mlisana — web developer, data analyst, game developer.",
  icons: {
    icon: "/assets/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')??"dark";if(t==="dark")document.documentElement.classList.add("dark");})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
