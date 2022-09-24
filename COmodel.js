const mongoose=require('mongoose')

const schema=mongoose.Schema({

  orderlist:[{type:String,required:true}], 

   totalprice:{
    type:Number,
    required:true
   },

   paymentinfo:{
    type:String,
    required:true
   }


}


)

const CO=new mongoose.model('customerorderlists',schema)

module.exports=CO

 