import "./FitnessbodyStyles.scss";
import fitnesschart from "../assets/fitnesschart.jpg";
import BmiCalculator from "../components/BmiCalculator.jsx";

const Fitnessbody = ()=>{
    return(
        <div className="fitnessbody">
            <h1>Fitness</h1>
            <p>Fitness encompasses more than just physical 
            exercise; it's a holistic approach to overall 
            well-being. It involves regular physical activity, 
            proper nutrition, mental resilience, and adequate 
            rest. Engaging in fitness routines enhances strength, 
            flexibility, and endurance, leading to improved health outcomes</p>
            
            <div className="fitnesschart">
                <div className="fit-text">
                    <h2>Fitness Chart</h2>
                    <p>A fitness chart incorporating height and weight is a valuable 
                        tool to track progress and set goals. It helps individuals 
                        understand their body composition and identify healthy ranges 
                        for their specific height. By mapping weight against height, 
                        this chart aids in determining BMI (Body Mass Index) and offers 
                        guidance on healthy weight goals. It acts as a visual aid, illustrating 
                        the correlation between height and weight, enabling individuals to make 
                        informed decisions about their fitness journey, whether it involves weight 
                        loss, muscle gain, or overall health improvement.</p>
                </div>

                <div className="imge">
                    <img alt="img" src={fitnesschart}/>
                <br></br>
                </div>
                <BmiCalculator/>
                <div>
                <br></br>
                <br></br>
                <h1>Choose your plan based on your BMI result</h1>
                </div>
                <div className="plans-container">
                    <div className="plandet">
                        <h4>Weight Gain</h4>
                        <a href="/working" className="mem">
                        Membership
                        </a>
                        <a href="/contact" className="det">
                        Details
                        </a>
                    </div>
                    <div className="plandet">
                        <h4>Weight Loss</h4>
                        <a href="/working" className="mem">
                        Membership
                        </a>
                        <a href="/contact" className="det">
                        Details
                        </a>
                    </div>
                    <div className="plandet">
                        <h4>Bodybuilding</h4>
                        <a href="/working" className="mem">
                        Membership
                        </a>
                        <a href="/contact" className="det">
                        Details
                        </a>
                    </div>
                    <div className="plandet">
                        <h4>Aesthetic</h4>
                        <a href="/working" className="mem">
                        Membership
                        </a>
                        <a href="/contact" className="det">
                        Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fitnessbody;