let data = JSON.parse(localStorage.getItem("sproduct"))
let arr = JSON.parse(localStorage.getItem("cartdata")) || []
let token=localStorage.getItem("token")
console.log(data)


var img5 = document.getElementById("currimage")
img5.setAttribute("src", data.image)

var name1 = document.getElementById("title")
name1.innerText = data.title

var cat = document.getElementById("cat")
cat.innerText = data.category

var count = document.getElementById("count")
count.innerText = data.count

var type = document.getElementById("type")
type.innerText = data.type

var des = document.getElementById("description")
des.innerText = data.subTitle

var rating = document.getElementById("rating")
rating.innerText = data.rate

var pri = document.getElementById("price")
pri.innerText = data.price

var btn1 = document.getElementById("AddtoBag")
btn1.addEventListener("click", () => {
    if(token){
        let cdata=arr.filter((ele)=>{
            if(data._id==ele._id){
                return true
            }else{
                return false
            }
    
        })
        if(cdata.length>0){
            alert("Product already in cart")
        }else{
            data.quantity=1
            arr.push(data)
            localStorage.setItem("cartdata",JSON.stringify(arr))
            alert("product added to cart")
        }
    }else{
        alert("please login first")
    }
 
})

var btn2 = document.getElementById("gotoBag")
btn2.addEventListener("click", () => {
  window.location.href = "cart.html"

})