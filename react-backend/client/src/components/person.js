import '../css/person.css'

function Person(props) {

    return (
        <div className="card col-sm-2 m-sm-3 person-card" style={{width: "15rem"}}>
            <div className="card-body">
                <h5 className="card-title" key={props.person.name}>{props.person.name}</h5>
                <p key={props.person.height}>Height : {props.person.height}</p>
                <p key={props.person.mass}>Mass : {props.person.mass}</p>
                <p key={props.person.hair_color}>Hair Color : {props.person.hair_color}</p>
                <p key={props.person.skin_color}>Skin Color : {props.person.skin_color}</p>
                <p key={props.person.eye_color}>Eye Color : {props.person.eye_color}</p>
                <p key={props.person.birth_year}>Birth Year : {props.person.birth_year}</p>
            </div>
        </div>
    );
}

export default Person;
