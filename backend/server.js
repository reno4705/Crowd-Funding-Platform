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
var nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config();

// connect to express app
const app = express()

//connect mongodb
const dbURI = process.env.DATABASE_URL
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

//-------------------middleware--------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(cors({credentials:true}))
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
}
app.use(cors(corsOptions));

//----------------------------REGISTER-------------------------
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

//----------------------------LOGIN-----------------------------------
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials'})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1hr' })
        res.send({ message: 'Login successful' })
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' })
    }
})

//---------------Company card API------------------------
  
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

app.post("/uploadcompany", upload.single("testImage"),  async(req,res) => {
    console.log(req.body);
    console.log(req.file);
    const imageName = req.file.filename;
    try{
        await CompanyModel.create (
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            companyName: req.body.companyName,
            category: req.body.category,
            compwebsite: req.body.compwebsite,
            country: req.body.country,
            city: req.body.city,
            img: imageName
        });
        // const response = await newCompany.save();
        res.json({ status: "ok" });
    }
    catch(error){
        res.json({ status: error });
    }
});

app.use(express.static('public'))
app.get("/uploadcompany", (req,res)=>{
    try {
        CompanyModel.find().then((data) => {
          res.send({ data });
        });
    } catch (error) {
        res.json({ status: error });
    }
});

//-------------------forgot-password---------------------------

app.post("/forgot-password", async(req, res) => {
    const {email} = req.body;
    const olduser = await User.findOne({ email });
    try {
        if(!olduser) {
            return res.send({Status: "User not existed"})
        } 
        console.log('Email:'+ email + ' userid:' + olduser._id);
        const token = jwt.sign({id: olduser._id}, "jwt_secret_key", {expiresIn: "1d"})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'benedictreno47@gmail.com',
              pass: 'jlwh dhbn qyez hxsd'
            }
          });
          
          var mailOptions = {
            from: 'youremail@gmail.com',
            to: email,
            subject: 'Reset Password Link',
            text: `http://localhost:3000/reset_password/${olduser._id}/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              return res.send({Status: "Success"});
            }
          });
    } catch (err) {
        console.log("Error in forgot password");
        res.status(400).json({
            message : 'Error sending mail'
        })
    }
});

app.post('/reset-password/:id/:token', async(req, res) => {
    const {id, token} = req.params;
    const {password} = req.body;

    try {
        jwt.verify(token, "jwt_secret_key", (err, decoded) => {
        if(err) {
            return res.json({Status: "Error with token"})
        } else {
            bcrypt.hash(password, 10)
            .then(hash => {
                User.findByIdAndUpdate({_id: id}, {password: hash})
                .then(u => res.send({Status: "Success"}))
                .catch(err => res.send({Status: err}))
            })
            .catch(err => res.send({Status: err}))
        }
    })
    } catch (err) {
        return res.json("Error in reset password")
    }
})