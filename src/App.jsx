import { BrowserRouter } from "react-router-dom";
import useIsMobile from "./hooks/useIsMobile";
import Full3DWebsite from "./pages/Full3DWebsite";
import MobileLanding from "./pages/MobileLanding";

const App = () => {
  const isMobile = useIsMobile(800);

  return (
    <BrowserRouter>
      {isMobile ? <MobileLanding /> : <Full3DWebsite />}
    </BrowserRouter>
  );
};

export default App;
