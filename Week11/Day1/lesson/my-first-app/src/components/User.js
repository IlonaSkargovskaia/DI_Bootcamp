import './User.css';
// import Button from '@mui/material/Button';

const User = (props) => {

    // userinfo one object from users.JSON 
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
            {/* <Button variant="outlined" href="#outlined-buttons">Button</Button> */}
        </div>
    )
}

export default User;