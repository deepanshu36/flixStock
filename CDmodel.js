const mongoose=require('mongoose')

const validator=require('validator')
// import {isEmail} from 'validator'
const validatorPackage = require('validator')

const schema=mongoose.Schema({

    name:{
     type:String,
     minLength:6,
     require:[true,'product name must be provided']
    },
    email:{
        type:String,
        require:[true,'email id must be provided'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email',
          },
    },
    phone:{
        type:Number,
        require:[true,'phone number must be provided'],
        minLength:10,
        maxLength:10
    }
}


)

const CD=new mongoose.model('customerdetails',schema)

module.exports=CD

 