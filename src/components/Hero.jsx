import "./HeroStyles.scss";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <video src={props.heroVideo} autoPlay muted loop />
        <div className="hero-text">
          <h1>{props.title}</h1>
        </div>
        <div className="join">
          <h1>{props.text}</h1>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;