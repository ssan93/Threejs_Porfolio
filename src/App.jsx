import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import {
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  // StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* <PreLoader /> */}
      <Toaster position="bottom-center" richColors theme="dark" />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Tech />
        {/* <About /> */}
        <Works />
        <Experience />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
