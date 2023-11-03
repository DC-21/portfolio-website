import Footer from "../components/global/Footer";
import Hero from "../components/global/Hero";
import About from "../components/Home/About";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Footer/>
    </>
  );
};

export default Home;