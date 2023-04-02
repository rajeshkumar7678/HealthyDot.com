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
    fetch("https://spring-green-centipede-suit.cyclic.app/user/login/",{
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
        localStorage.setItem("token",data.token)
        localStorage.setItem("name1",data.name)
        alert(data.msg)
        window.location.href="../index.html"
    })
    .catch((err)=>{
        console.log(err)
    })

    
})