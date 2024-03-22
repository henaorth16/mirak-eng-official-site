import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import vision from "./assets/icons/vision.png";
import strategy from "./assets/icons/strategy.png";
import policy from "./assets/icons/policy.png";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Up from "./components/Up";
import { useScroll } from "./hook/useScroll";
import Projects from "./components/Projects";
import TrustedBy from "./components/TrustedBy";

function App() {
  const arr = useScroll();
  return (
    <>
      <NavBar />
      <Slider />
      <About vision={vision} strategy={strategy} policy={policy} />
      <Services />
      <Projects />
      <TrustedBy/>
      <Contact />
      <Footer />
      <Up arr={arr} />
    </>
  );
}

export default App;
