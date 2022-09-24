require('dotenv').config()
const mongoose=require('mongoose')
mongoose.connect(process.env.url)
.then(()=>{
    console.log('connection succeful')
})  
.catch((e)=>{
        console.log("no connection")
    })