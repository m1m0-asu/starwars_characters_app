function Person(props) {

    return (
        <div>
            <div key={props.person.name}>{props.person.name}</div>
            <div key={props.person.height}>{props.person.height}</div>
            <div key={props.person.mass}>{props.person.mass}</div>
            <div key={props.person.hair_color}>{props.person.hair_color}</div>
            <div key={props.person.skin_color}>{props.person.skin_color}</div>
            <div key={props.person.eye_color}>{props.person.eye_color}</div>
            <div key={props.person.birth_year}>{props.person.birth_year}</div>
        </div>
    );
}

export default Person;
