import "./App.css";
import User from './components/User';
import users from './users.json'

// const users = [
//   { name: "Marry", email: "marry@gmail.com" },
//   { name: "John", email: "john@gmail.com" },
//   { name: 'Dug', email: 'dug@gmail.com'},
//   { name: 'aaa', email: 'aaa@gmail.com'}
// ];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* PROPS like in object - add info to component */}
        {
            users.map((item) => {
                //console.log(item); //{{ name: "Marry", email: "marry@gmail.com" },}
                //key - for virtual DOM - we can't use it after
                return <User userinfo={item} key={item.id}/>
            })
        }
        {/*  <Hello name={users[0].name} email={users[0].email} />
         <Hello name={users[1].name} email={users[1].email} />
        <Hello name={users[2].name} email={users[2].email} />      */}
      </header>
    </div>
  );
}

export default App;
