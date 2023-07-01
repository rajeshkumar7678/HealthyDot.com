const baseurl="https://difficult-turtleneck-shirt-lamb.cyclic.app"

let email1=document.getElementById("Email")
let pass=document.getElementById("password")
let form1=document.getElementById("form")


form1.addEventListener("click",(e)=>{
    e.preventDefault()
    let obj={
        email:email1.value,
        password:pass.value
    }
    console.log("hi")
    console.log(obj)
    fetch(`${baseurl}/user/login`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    }).then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        if(data.name){
            localStorage.setItem("token",data.token)
            localStorage.setItem("name1",data.name)
            alert(data.msg)
            window.location.href="../index.html"
        }else{
            alert(data.msg)
        }
        
    })
    .catch((err)=>{
        console.log(err)
    })

    
})