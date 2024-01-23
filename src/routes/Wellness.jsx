import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WellnessDetails from "../components/WellnessDetails.jsx";

function Wellness() {
  return (
    <>
      <Navbar />
      {/*<Hero
        cName="hero-mid"
        heroVideo={wellness}
        autoPlay
        muted
        loop
        type="wellness2.mp4"
        title="The groundwork for all happiness is good health"
  />*/}
  <br></br><br></br><br></br><br></br><br></br>
      <WellnessDetails/>
      <Footer/>
    </>
  );
}

export default Wellness;