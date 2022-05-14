const products =require('./products.js')
const express=require('express')
const app=express()
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.get('/api/products',(req,res)=>{

    res.json(products)
})

app.get('/api/product/:id',(req,res)=>{
const product=products.find((product)=>product._id === req.params.id)
    res.json(product)
})

app.listen(5000,()=>{console.log('server is running')})