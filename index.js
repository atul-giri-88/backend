require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res) => {
    res.send("atul goswami")
})
app.get('/youtube',(req,res)=>{
    res.send("hfhud")
})


app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
