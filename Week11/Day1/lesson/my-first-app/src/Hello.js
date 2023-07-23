//function component

const Hello = (props) => {
    console.log(props); //{name: 'John'}
    //const {name, email} = props
    const userList = [
    {
        name: 'John',
        email: 'john@gmail.com',
        isEmail: true,
        username: 'johnjohn'
    },
    {
        name: 'John1',
        email: 'john1@gmail.com',
        isEmail: true,
        username: 'johnjohn'
    },
    {
        name: 'John2',
        email: 'john2@gmail.com',
        isEmail: true,
        username: 'johnjohn'
    },

    ]

    
    return (
        <>
            <h1>Hello {props.name}</h1>
            <h2>{props.email}</h2>

            {/* loop */}

            {
                userList.map((item, index) => {
                    return (
                        <h1 key={index}> Hello {item.name} </h1>
                    )

                })
            }

            {/* condition */}
            {/* ?? - (null || undefined) */}
            {/* {
                user.isEmail ?? <h2>{user.email}</h2> : null
            } */}
        </>
    );
};

export default Hello;