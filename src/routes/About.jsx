import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import contact from "../assets/contact.mp4"
import Heroine from "../components/Heroine.jsx"

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroVideo={contact}
        autoPlay
        muted
        loop
        type="contact.mp4"
        title="About AK FITHUB"
      />
      <Heroine/>
      <Footer/>
    </>
  );
}

export default About;