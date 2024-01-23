import "./FitnessDetailsStyles.scss";

function FitnessDetailsData(props){
    return(
        <>
        <div className="fit">
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <img src={props.image} alt="img"/>
        </div>
        </>
    )
}

export default FitnessDetailsData;