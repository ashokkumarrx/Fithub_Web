import "./PlanStyles.scss";
import PlanData from "./PlanData.jsx";
import weightloss from "../assets/weightloss.jpg";
import weightgain from "../assets/weightgain.jpg";
import bodybuilding from "../assets/bodybuilding.jpg";

function Plan(){
    return(
        <div className="plan">
            <h1>Membership Plans</h1>
            <p>Choose your plan</p>
            <div className="plancard">
                <PlanData
                    image={weightloss}
                    heading="Weight loss and muscle building"
                    text="I is the one difference between Fit and Fat.
                    The key to weight loss is building new habits that lead to eating better and moving more."
                    buttonText="Join Membership"
                    url="/working"
                    btnClass="sho"
                    urll="/contact"
                    btnCls="shot"
                    buttontxt="Details"
                />

                <PlanData
                    image={weightgain}
                    heading="Weight gain and muscle building"
                    text="Gains is just another way of describing your progress 
                    in the gym. Weight gain refers to muscle growth or gaining strength."
                    buttonText="Join Membership"
                    url="/working"
                    btnClass="sho"
                    urll="/contact"
                    btnCls="shot"
                    buttontxt="Details"
                />

                <PlanData
                    image={bodybuilding}
                    heading="BodyBuilding and Strength training"
                    text="Strength training is any activity that makes your muscles stronger. 
                    bodybuilding aims to make yourself bigger."
                    buttonText="Join Membership"
                    url="/working"
                    btnClass="sho"
                    urll="/contact"
                    btnCls="shot"
                    buttontxt="Details"
                />
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Plan;