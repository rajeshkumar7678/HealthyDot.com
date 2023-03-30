const express=require("express")
require("dotenv").config()
const {connection}=require("./db")


const app=express()





app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("db is connected")
        
    } catch (error) {
        console.log("error occure")
    }
    console.log("server is running")
})