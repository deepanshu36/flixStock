const mongoose=require('mongoose')

const schema=mongoose.Schema(
{
    productname:{
        type:String,
        require:[true,'product name must be provided'],
        unique:true
    },
    productcategory:{
     type:String,
     require:[true,'product catogory must be provided']
    },
    productinfo:{
        type:String,
        require:[true,'email id must be provided']
    },
    price:{
        type:Number,
        require:[true,'phone number must be provided']
    },
    quantity:{
        type:Number,
        require:[true,'phone number must be provided']
    }

}

)

const PD=new mongoose.model('productdetails',schema)

module.exports=PD

 