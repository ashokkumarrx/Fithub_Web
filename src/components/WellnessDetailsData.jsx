import "./WellnessDetailsStyles.scss";

function WellnessDetailsData(props){
    return(
        <>
        <div className={props.className}>
        <div class={props.class}>
            <h2>{props.heading}</h2>
            <ul>
                <li><h3>{props.head}</h3> {props.text}</li>
                <li><h3>{props.head2}</h3> {props.text2}</li>
                <li><h3>{props.head3}</h3> {props.text3}</li>
                <li><h3>{props.head4}</h3> {props.text4}</li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default WellnessDetailsData;