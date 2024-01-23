import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import gymbg from "../assets/gymbg.mp4";
import Destination from "../components/Destination.jsx"
import Plan from "../components/Plan.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroVideo={gymbg}
        type="gymbg.mp4"
        title="Hard work is worthless for those that don’t believe in themselves"
        text="Fitness Journey"
        buttonText="Join Us"
        url="/working"
        btnClass="show"
      />
      <Destination/>
      <Plan/>
      <Footer/>
    </>
  );
}

export default Home;