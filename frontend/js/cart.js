let show=document.getElementById("popupp");
let btn = document.getElementById("btun");
let close =document.getElementById("close-btn");
let appendaddress = document.getElementById("append-address");




btn.addEventListener(("click"), ()=>{
    show.style.display = "flex";


    let inputbtns=document.querySelectorAll("#saveus>input");
    let selectAddoption =''

    // console.log(inputbtns);

    inputbtns.forEach((item, ind) =>{
 
        item.addEventListener("click", ()=>{
            selectAddoption=item.value
        })
   

    })

    let savebtn = document.getElementById("savebtn");
    savebtn.addEventListener("click", ()=>{
        let pincpdepop=document.getElementById("code");
        let fnamepop=document.getElementById("F_name");
        let lnamepop = document.getElementById("l_Name");
        let mobnumpop = document.getElementById("mobile");
        let addln1pop = document.getElementById("add_1");
        let landMpop = document.getElementById("land_mark");
        let citypop= document.getElementById("city");
        let statepop = document.getElementById("state");
    
        if( selectAddoption==="" || pincpdepop==="" || fnamepop==="" || lnamepop==="" || mobnumpop==="" || addln1pop==="" || landMpop==="" ||  citypop==="" || statepop==="" ){
            // alert("Please Fill all the Input Fields");
            Swal.fire({
                title: 'Please Fill all the Input Fields',
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
                })
        }
        else if(mobnumpop.value.length != 10){
            // console.log(mobnumpop.value.length);
            Swal.fire({
                title: 'Incorrect Mobile Number...',
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
                })
        }
        else{
            show.style.display="none";
            Swal.fire({
                title: 'Address Successfully Saved...',
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
            })
            let obj = {
                pincpdepop:pincpdepop.value,
                fnamepop:fnamepop.value,
                lnamepop:lnamepop.value,
                mobnumpop:mobnumpop.value,
                addln1pop:addln1pop.value,
                landMpop:landMpop.value,
                citypop:citypop.value,
                statepop:statepop
            }
            console.log(obj)
            localStorage.setItem("shippingAddress",JSON.stringify(obj));
            let Addressofshipping = JSON.parse(localStorage.getItem("shippingAddress"))||[];
            //console.log(Addressofshipping)
            


            appendaddress.style.display="block"
        }

    })
})
close.addEventListener("click", ()=>{
    show.style.display="none";
})



let token = localStorage.getItem("token")

let bodydiv =  document.querySelector(".eagle");
let noprod = document.querySelector("#noProds>h2")
let appendCart = document.getElementById("appendCart");

window.addEventListener("load",()=>{
    if(token){
        let data = JSON.parse(localStorage.getItem("cartdata")) || [] 
         
        if(data.length === 0){
            bodydiv.style.display = "none"
            noprod.innerText = "No Products in cart" ;
        }else{
            bodydiv.style.display = "flex"
                
            renderDOMcart(data)
        } 
    }else{
        noprod.innerText = "Please Login First" ; 

    }
    
    
})



function renderDOMcart (data){
    let numitems = document.getElementById("numOfitems");
    numitems.innerText = data.length ; 


    
    let arr = data.map((ele,ind)=>{
        return renderCartCards(ele,ind);
    })

    let orderVal = document.getElementById("orderVal") ; 
    let prodDiscount = document.getElementById("prodDiscount") ;
    let totalAmt = document.getElementById("totalAmt") ;
    let prodDis = document.getElementById("prodDis");

    appendCart.innerHTML = `
        ${arr.join("")}
    `
    let sizeSelect = document.querySelectorAll(".quantity");

    let closebtn = document.querySelectorAll(".close-button>button");

    closebtn.forEach((elem,inde)=>{
        
       


    })
    

    // sizeSelect.forEach((ele,ind)=>{
    //     ele.addEventListener("change",(e)=>{
    //         // alert(ele.value)
    //         let sum = [];

            
    //         let prod = 0; 
    //         data.forEach((el,inde)=>{
    //             prod += el.price * sum[inde];
    //         })

    //         // alert(prod)
    //         orderVal.innerText = prod  ;
    //         totalAmt.innerText = prod - Number(prodDiscount.innerText); 
    //         prodDis.innerText = Number(prodDiscount.innerText); 
    //     })
    // })
    
    let prod = 0

    data.forEach((el,inde)=>{
        prod += el.price * sizeSelect[inde].value ;
    })
    orderVal.innerText = prod  ;
    totalAmt.innerText = prod - Number(prodDiscount.innerText); 
    prodDis.innerText = Number(prodDiscount.innerText); 

}

// function(data,)

function renderCartCards (item,index){
    
    // item 

    let id = item.id;
    let title  = item.title;
    let img = item.image;
    let price = item.price;
    let size = item.size;
    let count = item.count;
   
    return `<div class="render-cart"> 
                <div id="img">
                    <img  class="cart-img" src="${img}" alt="aeimg">
                </div>
                <div class="userProds">
                    <h5>${title}</h5>
                    <p>₹ ${price}</p>
                    <p>Count: ${count}</p>

                    quantity <select name="qunty" class="quantity"  id="quant${id}">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="close-button" data-id = "${id} "><button data-int="${index}" class="times-close">&times;</button></div>
            </div>
`
}



let set=document.getElementById("deliver-button")
set.addEventListener("click",()=>{
    window.location.href="./paymentdetalis.html"
})