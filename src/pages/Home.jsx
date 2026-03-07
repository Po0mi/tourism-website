import HeroSection from "../components/Hero";
import Destinations from "../components/Destinations";
import Regions from "../components/Regions";
import About from "../components/About";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Destinations />
      <Regions />
      <About />
    </>
  );
};

export default Home;
