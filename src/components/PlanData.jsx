import "./PlanStyles.scss";

function PlanData(props){
    return(
        <div className="p-card">
            <div className="p-image">
                <img src={props.image} alt="img"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <br></br>
            <div className="membtn">
            <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
          <a href={props.urll} className={props.btnCls}>
            {props.buttontxt}
          </a>
          </div>
        </div>
    )
}

export default PlanData;