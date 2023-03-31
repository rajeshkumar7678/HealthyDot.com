let email=document.getElementById("Email")
let pass=document.getElementById("password")
let form=document.getElementById("form")

form.addEventListener("click",(e)=>{
    e.preventDefault()
    let obj={
        email:email.value,
        password:pass.value
    }
    fetch("",{
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
        alert(data.msg)
        window.location.href="../index.html"
    })
    .catch((err)=>{
        console.log(err)
    })

    
})