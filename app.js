const express=require('express')
const router=require('./router')
const app=express()
require('dotenv').config()

const errormiddle=require('./errorhandler')
const notfound=require('./notfound')

require("./conn")

const port=process.env.port || 8000

app.use(express.json())
app.use(router)

app.use(notfound)

app.use(errormiddle)

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

