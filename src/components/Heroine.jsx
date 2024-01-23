import "./HeroineStyles.scss";

function Heroine(){
    return(
        <div className="heroine">
            <br></br>
            <br></br>
            <h1>Created to help you live abetter, happier, healthier life.</h1>
            <p>Our goal is to make health and fitness attainable,
                affordable and approachable. We believe fitness should be accessible to everyone, everywhere, 
                regardless of income level or access to a gym. That's why we offer 
                hundreds of full-length workout videos, the most affordable and 
                effective workout programs on the web, meal plans, and helpful 
                health, nutrition and fitness information.</p>
            <br></br>
            <div className="heroinelink">
                <br></br>
                <br></br>
                <h2>Ready to try a AK Fithub workout?</h2>
               
                <br></br>
                <a href="/working" className="heroinebtn">
                    GET STARTED TODAY
                </a>
               
               
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Heroine;