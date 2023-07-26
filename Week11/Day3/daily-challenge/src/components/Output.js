const Output = (props) => {
    console.log(props);
    const {forminputs} = props;
    return (
        <div style={{
            backgroundColor: '#1f5555', 
            color: '#fff',
            padding: '2rem'
            }}>

            <h2>Entered information:</h2>
            <p><i>Your name: {forminputs.firstname} {forminputs.lastname}</i></p>
            <p><i>Your age: {forminputs.age}</i></p>
            <p><i>Your gender: {forminputs.gender}</i></p>
            <p><i>Your destination: {forminputs.destination}</i></p>
            <p><i>Your dietary restrictions: <br /></i></p>
            <p>** Nuts free: {forminputs.nuts ? 'Yes' : 'No'}</p>
            <p>** Lactose free: {forminputs.lactose ? 'Yes' : 'No'}</p>
            <p>** Vegan meal: {forminputs.vegan ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default Output;