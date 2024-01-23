import FitnessDetailsData from "./FitnessDetailsData";
import "./FitnessDetailsStyles.scss";
import cardio from "../assets/cardio.jpg";
import circuit from "../assets/circuit.jpg";
import bodybuild2 from "../assets/bodybuild2.jpg";
import bodybuild3 from "../assets/bodybuild3.jpg";
import grouptraining from "../assets/grouptraining.jpg";
import personaltraining from "../assets/personaltraining.jpg";

const FitnessDetails = ()=>{
    return(
        <div className="FitnessDetails">
            <br></br>
            <h1>Workout Details</h1>
            <br></br>
            <div className="fitness-card">
            <FitnessDetailsData
                class="first-fit"
                heading="Cardio"
                text="Cardio, short for cardiovascular exercise, 
                refers to any activity that raises your heart rate 
                and gets your blood pumping. It's an essential component 
                of a well-rounded fitness routine and offers numerous 
                benefits for heart health, weight management, and overall well-being."
                image={cardio}
           />
           <br></br>
           <FitnessDetailsData
           class="first-fit2"
           heading="Circuit Training"
           text="Circuit training offers a dynamic and time-efficient 
           approach to fitness, making it popular in gym settings. It 
           provides a challenging workout that targets multiple fitness 
           components within a single session, catering to individuals 
           seeking a varied and impactful exercise routine."
           image={circuit}
           />
           </div>
           <br></br>
           <div className="fitness-card">
            <FitnessDetailsData
                class="first-fit"
                heading="Body Building"
                text="Bodybuilding is a discipline focused on developing 
                and enhancing muscle size, strength, and symmetry through
                 structured exercise, nutrition, and dedication. It involves 
                 rigorous training routines, often centered around weightlifting 
                 and resistance exercises, aimed at sculpting the body's muscles."
                image={bodybuild3}
           />
           <br></br>
           <FitnessDetailsData
           class="first-fit2"
           heading="Weight Loss"
           text="A weight loss program in a gym typically involves a structured plan aimed 
           at helping individuals shed excess body weight through a combination of 
           exercise, nutrition, and lifestyle modifications. These programs are often 
           tailored to individual needs and fitness levels, aiming to create a calorie 
           deficit to encourage weight loss."
           image={bodybuild2}
           />
           </div>
           <br></br>
           <div className="fitness-card">
            <FitnessDetailsData
                class="first-fit"
                heading="Group Training"
                text="Group training in a gym involves workout sessions led by fitness 
                instructors or trainers for a group of individuals. These sessions can 
                encompass various fitness styles, exercises, and formats, catering to multiple 
                participants at the same time. Group training offers a dynamic and social 
                environment that can be motivating and enjoyable."
                image={grouptraining}
           />
           <br></br>
           <FitnessDetailsData
           class="first-fit2"
           heading="Personal Training"
           text="Personal training in a gym involves one-on-one fitness instruction and 
           guidance provided by a certified personal trainer. This personalized approach 
           tailors workouts and fitness plans to an individual's specific goals, fitness 
           level, and needs. A personal trainer works exclusively with one client at a time."
           image={personaltraining}
           />
           </div>
           <br></br>
        </div>
    )
}

export default FitnessDetails;