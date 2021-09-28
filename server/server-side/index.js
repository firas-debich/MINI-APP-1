const express = require('express')
const app = express()
var cors = require('cors')
const db = require("./data-base/model")
const port = 3004

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')

})
app.post('/save', (req, res) => {

  let username = req.body.username
  let email = req.body.email
  let password = req.body.password
  let passwordConfirmed = req.body.confirmedPasword
  console.log(req.body)

  db.save({ username, email, password, passwordConfirmed }).then(_ => {
    res.status(201).send("data saved")

  }).catch(err => {
    res.status(404).send(err)
  })



})
app.post("/login",(req,res)=>{
console.log(req.body)
db.logIn.findOne({username:req.body.usernameLog},(err,data)=>{
  console.log(data.username)
  if(err){res.status(503).send(err)} 
  else{
    res.status(201).send("is exist")

  }
  
})
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

