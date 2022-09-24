const express=require('express')
const router=new express.Router()
const {createorder,customerlist,findcutomerdetailsbyid,maxorders,newcustomer,newproduct, updateprice}=require('./controller')

router.post('/api/v1/orderdetails/:id',createorder)

////// 1.api to fetch customer lists 

router.get('/api/v1/customerdetails',customerlist)

////  2. api to get specific customer order list 
router.get('/api/v1/orderdetails/:id',findcutomerdetailsbyid)

///// 3. fetch customer details with max orders 

router.get('/api/v1/customerdetails/max',maxorders)

///// 4. create new customer

router.post('/api/v1/customerdetails',newcustomer)

//// 5. create a new product

router.post('/api/v1/productdetails',newproduct)

//// 6. Update price of the given product

router.patch('/api/v1/productdetails/:id',updateprice)


module.exports=router
