const CD=require('./CDmodel')
const CO=require('./COmodel')
const PD=require('./PDmodels')


const createorder=async(req,res)=>
{  
    req.body._id=req.params.id
const result= await CO.create(req.body)

res.status(200).send(result)

}

const customerlist=async(req,res)=>
{  
   
const result= await CD.find()
res.status(200).send(result)

}



const findcutomerdetailsbyid=async(req,res)=>
{  
   
const result= await CO.find({id:req.params.id})
res.status(200).send(result[0].orderlist)

}


const newproduct=async(req,res)=>
{  
   
const result= await PD.create(req.body)
res.status(200).send(result)

}

const maxorders=async(req,res)=>
{  
  const result=await CO.aggregate( [
    { $unwind : "$orderlist" },
    { $group : { _id: "$_id", length : { $sum : 1 } } },
    { $sort : { length:-1} },
    { $limit : 1}
  ] )

const id=result[0]._id
 
const finalresult=await CD.find({_id:id})

res.status(200).send(finalresult)

}


const newcustomer=async(req,res)=>
{  
   
const result= await CD.create(req.body)
res.status(200).send(result)

}

const updateprice=async(req,res)=>
{
const result=await PD.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})

res.json(result)

}

module.exports={createorder,customerlist,findcutomerdetailsbyid,maxorders,newcustomer,newproduct,updateprice}
