//function component

const Hello = (props) => {
    console.log(props); //{name: 'John'}
    //const {name, email} = props
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h2>{props.email}</h2>
        </div>
    );
};

export default Hello;