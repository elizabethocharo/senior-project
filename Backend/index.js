const express= require('express');
const cors =require('cors');
const app = express();
const db = require('mysql2');
const port = 8000; 
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json());

// connect to mysql
const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gitaujustus',
    database: 'seniorproject'
  });

  connection.connect(function(err) {
    if (err) {
        console.log('error connecting to database: ' + err.stack);
        return;
    };
    console.log("Connected to database!");
  });




app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.post('/auth/login', (req, res) => {
    const email= req.body.email;
    const password= req.body.password;


    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    connection.query(query, (err, result) => {
        if(err) {
            console.log(err);
            return res.status(500).json({message: 'error logging in'})
        } else{
            console.log("Login Successful",result);
            return res.status(200).json({name: result[0].name, email: result[0].email, phone: result[0].phone, message: 'success'})
        }
    });
  })  


  app.post('/auth/register', (req, res) => { 
    const name= req.body.name;
    const email= req.body.email;
    const phone= req.body.phone;
    const password= req.body.password; 

    // console.log(fullName, email, phone, password);

    // insert into database
    const query = `INSERT INTO users (name, email, phone, password) VALUES ('${name}', '${email}', '${phone}', '${password}')`;
    connection.query(query, (err, result) => {
        if(err) {
            console.log(err);
            return res.status(500).json({message: 'error creating user'})
        } else{
            console.log("User registered successfully", result);
            return res.status(200).json({message: 'success'})
        }
    });
  })



    
app.listen(port, () => {
    console.log(`Listening at post ${port}`)
  })