import {useState} from 'react';


const User = () => {

    const [inputs, setInputs] = useState({});
    const [formSubmit, setFormSubmit] = useState(false);

    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    const formHandle = (e) => {
        e.preventDefault();
        console.log(inputs);
        
        setFormSubmit(true);
    }

    return (
        <div style={{backgroundColor: '#ccc', width: '400px', margin: '1rem auto', padding: '1rem', textAlign: 'center'}}>
            <h1>Welcome!</h1>

                {(!formSubmit) ? (
                    <form onSubmit={formHandle}>

                        <p>Please, provide your information below</p>
                        <input name="firstname" placeholder="First Name" value={inputs.firstname || ""}  onChange={inputHandle} />
                        <input name="lastname" placeholder="Last Name" value={inputs.lastname || ""}  onChange={inputHandle} />
                        <input name="phone" placeholder="Phone number" value={inputs.phone || ""}  onChange={inputHandle} />
                        <input name="email" placeholder="Email address" value={inputs.email || ""}  onChange={inputHandle} />
                        <br />
                        <button>Submit</button>
                    </form>
                ) : (
                    <p>{inputs.firstname}</p>
                )
            }


        </div>
    )
}

export default User;