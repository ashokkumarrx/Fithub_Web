import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import fitness from "../assets/fitness.mp4";
import Footer from "../components/Footer.jsx";
import Fitnessbody from "../components/Fitnessbody.jsx";
import FitnessDetails from "../components/FitnessDetails.jsx";

function Fitness() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroVideo={fitness}
        autoPlay
        muted
        loop
        type="fitness.mp4"
        title="Fitness is not about being better 
        than someone else; it's about being better 
        than you used to be."
      />
      <Fitnessbody/>
      <FitnessDetails/>
      <Footer/>
    </>
  );
}

export default Fitness;