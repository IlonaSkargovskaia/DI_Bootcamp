import './User.css';

const User = (props) => {

    // props - one object from array of objects
    // userinfo one object from JSON and this - name which we put in props in App.js
    const {userinfo} = props;

    // const styling = {
    //     display: 'inline-block',
    //     textAlign: 'center',
    //     padding: '20px',
    //     margin: '20px',
    //     border: '1px solid #ccc'
    // }

    return (
        <div className='userstyle'>
            <img src={`https://robohash.org/${userinfo.id}?size=150x150`} alt=''/>
            <h2>{userinfo.name}</h2>
            <h4>{userinfo.email}</h4>
            <p>{userinfo.username}</p>
        </div>
    )
}

export default User;