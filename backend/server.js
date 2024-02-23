const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./models/userSchema');
const SECRET_KEY = 'secretkey';

const fs = require("fs");
const CompanyModel = require("./models/companySchema")
const multer = require("multer")
const { error } = require('console')

// connect to express app
const app = express()

//connect mongodb

const dbURI = 'mongodb+srv://reno:benedict4705@cluster0.i4j9ndf.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose
.connect(dbURI)
.then(() => {
    app.listen(3001, () => {
        console.log('Server connected to port 3001 and MongoDb')
    })
})
.catch((error) => {
    console.log('Unable to connect to Server and/or MongoDB', error)
})

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())



// REGISTER
//POST REGISTER
app.post('/register', async (req, res) => {
    try {
        const { email, name, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ email, name, password: hashedPassword })
        await newUser.save()
        res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Error signing up' })
    }
})

//GET Registered Users
app.get('/register', async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json(users)
        
    } catch (error) {
        res.status(500).json({ error: 'Unable to get users' })
    }
})

//LOGIN

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials'})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1hr' })
        res.json({ message: 'Login successful' })
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' })
    }
})

///////////////////////////////////////////////////////
//Company card API

app.get("/test", (req, res)=> res.send("this is working fine"));



const upload = multer({dest : '/uploads'});

app.post("/uploadcompany", upload.single("testImage"),  async (req,res) => {
    
try{
  const newCompany = new CompanyModel(
    {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            compname: req.body.compname,
            category: req.body.category,
            compwebsite: req.body.compwebsite,
            country: req.body.country,
            city: req.body.city,
            img: {
                data: req.file.buffer, 
                contentType: req.file.mimetype
            }
    }
    
  );
  const response = await newCompany.save();
  if(response){
    console.log(`File Saved Successfully`);
    res.status(201).json({
        message :'File Saved successfully'
    })
  }
}
catch(err){
  console.error(err);
  res.status(501).json({
    message : 'Internal Server Error'
  })
}
   
 
});

app.get("/uploadcompany",async (req,res)=>{
    const allData = await CompanyModel.find();
    res.json(allData)
})