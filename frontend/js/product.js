const baseurl="https://difficult-turtleneck-shirt-lamb.cyclic.app"

let main=document.querySelector("#append")
let wholedata


function getdata(){
fetch(`${baseurl}/home`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        wholedata=data
        displayproduct(data)
        console.log(data)
        //searchbar(wholedata)
        
    })
    .catch((err)=>{
        console.log(err)
    })
}
getdata()

function displayproduct(data){
    main.innerHTML=""
    data.forEach((element) => {
        let card=document.createElement("div")
        card.setAttribute("class","card")

        let img=document.createElement("img")
        img.setAttribute("src",element.image)

        img.addEventListener("click",()=>{
            localStorage.setItem("sproduct",JSON.stringify(element))
            window.location.href="./singleproductpage.html"
            })

        let title=document.createElement("h4")
        title.innerText=element.title

        let count=document.createElement("p")
        count.innerText=element.count

        let rating=document.createElement("p")
        rating.innerText=element.rate+" rating"

        let pr=document.createElement("div")
        pr.setAttribute("class","pr")

        let price=document.createElement("h4")
        price.innerText="₹"+element.price
        price.style.fontSize=30

        let button=document.createElement("button")
        button.innerText="ADD"

        pr.append(price,button)
        card.append(img,title,count,rating,pr)
        main.append(card)
    });
}



// sorting======================================================
let sort=document.getElementById("sorting")
sort.addEventListener("change", () => {
if(sort.value==""){
    displayproduct(wholedata)
}else if(sort.value=="des"){
    fetch("https://spring-green-centipede-suit.cyclic.app/home/price2")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        
        displayproduct(data)
        
        
    })
    .catch((err)=>{
        console.log(err)
    })
    

}else if(sort.value=="ass"){
    fetch("https://spring-green-centipede-suit.cyclic.app/home/price1")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        
        displayproduct(data)
        
        
    })
    .catch((err)=>{
        console.log(err)
    })

}
})

// FILTER=================================================
let filterbtn2=document.getElementById("filterbtn2")
let category=""
filterbtn2.addEventListener("click",()=>{
    showbrand()
  })
  
  
  function showbrand(){
    let Supplement=document.getElementById("Supplement").checked
  let Diabetes=document.getElementById("Diabetes").checked
//   let hp=document.getElementById("hp").checked
//   let acer=document.getElementById("acer").checked
//   let lenevo=document.getElementById("lenevo").checked
//   let sony=document.getElementById("sony").checked
//   let godrej=document.getElementById("godrej").checked
//   let dalkin=document.getElementById("dalkin").checked
//   let canon=document.getElementById("canon").checked
//   let bosch=document.getElementById("bosch").checked
//   let lg=document.getElementById("lg").checked
  if(Supplement){
    category="Supplement"
  }else if(Diabetes){
    category="Diabetes"
  } 
  else{
    displayproduct(wholedata)
  }
  filterbrand()
  }
  function filterbrand(){
    let filtered=wholedata.filter((ele,i)=>{
    if(ele.category==category){
        return true
    }else{
      return false
    }
    })
    displayproduct(filtered)
    console.log(filtered)
  }


let filterbtn3=document.getElementById("filterbtn3")
let Type=""
filterbtn3.addEventListener("click",()=>{
    showbrand()
  })
  
  
  function showbrand(){
  let Box=document.getElementById("Box").checked
  let Bottle=document.getElementById("Bottle").checked
  let Jar=document.getElementById("Jar").checked
  let tin=document.getElementById("tin").checked
  let Packet=document.getElementById("Packet").checked
  let Combo=document.getElementById("Combo").checked
  let unit=document.getElementById("unit").checked
//   let dalkin=document.getElementById("dalkin").checked
//   let canon=document.getElementById("canon").checked
//   let bosch=document.getElementById("bosch").checked
//   let lg=document.getElementById("lg").checked
  if(Box){
    Type="Box"
  }else if(Bottle){
    Type="Bottle"
  }else if(Jar){
    Type="Jar"
  }else if(tin){
    Type="tin"
  }else if(Packet){
    Type="Packet"
  }else if(Combo){
    Type="Combo"
  }else if(unit){
    Type="unit"
  }
  else{
    displayproduct(wholedata)
  }
  filterbrand()
  }
  function filterbrand(){
    let filtered=wholedata.filter((ele,i)=>{
    if(ele.type==Type){
        return true
    }else{
      return false
    }
    })
    displayproduct(filtered)
    console.log(filtered)
  }


//   search====================================



//function searchbar(wholedata){
  const search = document.querySelector(".search");
  search.addEventListener("input", (e) => {
    e.preventDefault();
    const value = e.target.value;
  
    let newArr = wholedata.filter(element => {
  
      return element.category.toLowerCase().includes(value) || element.type.toLowerCase().includes(value);
  
    })
    // console.log(data)
    displayproduct(newArr)
  
  })









