const express=require("express")
const {productmodel}=require("../model/productmodel")
const pro=express.Router()

pro.get("/",async (req,res)=>{
    try {
        let data=await productmodel.find(req.query)
        
        res.status(200).send(data)
        
    } catch (error) {
        console.log(error)
        res.status(400).send({"msg":error})
    }

})







module.exports={
    pro
}