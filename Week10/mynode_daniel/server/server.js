import express, { urlencoded } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const users = [
  { id: 1, name: "Daniel", age: "26", country: "Israel" },
  { id: 2, name: "Sam", age: "30", country: "US" },
  { id: 3, name: "Marina", age: "28", country: "Israel" },
];

app.get("/:name", (req, res) => {
    console.log(req.params); //{ name: 'Sam' }

    const userName = req.params.name;
    const userInfo = users.find(item => item.name === userName);

    res.json(userInfo);
});

const usersExist = [
    { name: "ilona", password: '123' },
    { name: "ilona2", password: '1234' },
]

app.post('/register', (req, res) => {
    //on the terminal
    //console.log(req.body); { name: 'ilona', psw: '123' }
    const {name, password} = req.body;
    
    const isExist = usersExist.find(item => item.name === name && item.password === password);
    
    if (isExist) {
        res.status(400).json(isExist);
    } else {
        const newUser = {name, password};
        usersExist.push(newUser);
        res.status(200).json(newUser);
        console.log(usersExist);
    }



    //res.json(req.body);
})

app.listen(PORT || 3005, () => {
  console.log(`listening ${PORT || 3005}`);
});
