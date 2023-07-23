import "./App.css";
// import User from './components/User';
// import Hello from './Hello.js';
// import users from './users.json'
import Product from "./components/Product";

// const users = [
//   { name: "Marry", email: "marry@gmail.com" },
//   { name: "John", email: "john@gmail.com" },
//   { name: 'Dug', email: 'dug@gmail.com'},
//   { name: 'aaa', email: 'aaa@gmail.com'}
// ];

const products = [
    {id: 1, name: 'iPhone', price: 800},
    {id: 2, name: 'iPad', price: 700},
    {id: 3, name: 'iWatch', price: 600},

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello />
        {
            users.map((item) => {
                //console.log(item); //{{ name: "Marry", email: "marry@gmail.com" },}
                return <User userinfo={item} key={item.id}/>
            })
        } */}

        
        
        {/*  <Hello name={users[0].name} email={users[0].email} />
         <Hello name={users[1].name} email={users[1].email} />
        <Hello name={users[2].name} email={users[2].email} />      */}



        {
          products.map(item => {
            return <Product key={item.id} info={item}/>
          })
        }




      </header>
    </div>
  );
}

export default App;
