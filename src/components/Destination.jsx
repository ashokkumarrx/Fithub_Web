import DestinationData from "./DestinationData";
import "./DestinationStyles.scss";
import bodyanalysis from "../assets/bodyanalysis.jpg"
import fitnessprogram from "../assets/fitnessprogram.jpg";
import healthandnutrition from "../assets/healthandnutrition.jpg"
import flexibility from "../assets/flexibility.jpg";

const Destination =() =>{
    return(
        <div className="destination">
            <br></br>
            <br></br>
            <h1>What is FitHub?</h1>
            <p>A virtual gateway to your wellness journey. Dive into a realm of curated
                 workouts, expert guidance, and nutritional wisdom. It's your online haven,
                 where fitness meets convenience, offering tailored plans and a supportive
                 community at your fingertips. Explore a treasure trove of exercise routines, 
                 health tips, and interactive tools, empowering you to sculpt your best self. 
                 Whether a beginner or a seasoned fitness enthusiast, this digital sanctuary 
                 welcomes all, inspiring progress and fostering a lifestyle of vitality.</p>
            <br></br>
           <DestinationData
                className="first-des"
                heading="Body Analysis"
                text="A fitness body analysis typically involves assessing various aspects of 
                one's physical condition to provide insights into overall health and fitness 
                levels. This analysis can encompass several components, including Body Composition, 
                Muscular Strength and Endurance, Cardiovascular Fitness, Flexibility, Posture and Balance"
                img1={bodyanalysis}
           />
           <br></br>
           <DestinationData
                className="first-des-reverse"
                heading="Fitness Programs"
                text="A fitness program is a structured plan designed to help individuals 
                improve their physical health and overall well-being. It typically includes 
                a combination of exercises, routines, and activities aimed at achieving specific 
                fitness goals, such as weight loss, muscle gain, improved endurance, flexibility, 
                or overall health improvement."
                img1={fitnessprogram}
           />
           <br></br>
           <DestinationData
                className="first-des"
                heading="Health and Nutrition"
                text="Health and nutrition go hand in hand, forming the bedrock of our vitality. 
                Nourishing our bodies with wholesome, balanced meals fuels not just physical strength 
                but also mental clarity. It's not solely about the food on our plates; it's a tapestry 
                woven with hydration, mindful eating habits, and a balanced lifestyle. "
                img1={healthandnutrition}
           />
           <br></br>
           <DestinationData
                className="first-des-reverse"
                heading="Flexibility"
                text="
                Flexibility in fitness is the silent superhero, often overlooked but essential for a 
                well-rounded regimen. It's the graceful dance of muscles and joints that allows us to 
                move freely and perform exercises with precision. Embracing flexibility training not 
                only enhances our range of motion but also reduces the risk of injury"
                img1={flexibility}
           />
           <br></br>
           <br></br>

        </div>
    )
}

export default Destination;