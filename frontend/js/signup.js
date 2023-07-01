const baseurl="http://localhost:4320"

let email=document.getElementById("Email")
let name1=document.getElementById("Name")
let pass=document.getElementById("password")
let form=document.getElementById("form")

form.addEventListener("click",(e)=>{
    e.preventDefault()
    let obj={
        email:email.value,
        name:name1.value,
        password:pass.value
    }
    fetch(`${baseurl}/user/add`,{
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
    })
    .catch((err)=>{
        console.log(err)
    })
    
})