import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useIsMobile from "./hooks/useIsMobile";
import GlobalLoader from "./components/GlobalLoader";

// Lazy load layout and detail components for optimization
const Full3DWebsite = React.lazy(() => import("./pages/Full3DWebsite"));
const MobileLanding = React.lazy(() => import("./pages/MobileLanding"));
const ProjectDetails = React.lazy(() => import("./pages/ProjectDetails"));
const ExperienceDetails = React.lazy(() => import("./pages/ExperienceDetails"));
const CertificateDetails = React.lazy(() => import("./pages/CertificateDetails"));

const App = () => {
  const isMobile = useIsMobile(800);
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <BrowserRouter>
      {/* Global preloader overlay. Remains active until Drei's loaders hit 100%. */}
      <GlobalLoader onFinished={() => setLoadingFinished(true)} />

      {/* Standard fallback for route transitions */}
      <Suspense fallback={<div className="bg-primary min-h-screen" />}>
        <Routes>
          <Route
            path="/"
            element={isMobile ? <MobileLanding /> : <Full3DWebsite />}
          />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/experience/:id" element={<ExperienceDetails />} />
          <Route path="/certificate/:id" element={<CertificateDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
