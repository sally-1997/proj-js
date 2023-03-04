var allproducts=document.querySelectorAll(".container-md .row .item1")
//var content=document.querySelector("#content")
var btn=document.querySelector("#btn1")
//var price1=document.querySelector("#price1")

var allproducts1=document.querySelectorAll(".container-md .row .item1 .card-body .btn")
var alert1=document.querySelector(".alert")
var d2=document.querySelector(".d2")
var x=1
var totalprice=0
var modalBody = document.querySelector(".modal-body")
allproducts1.forEach(function(item){
    item.onclick=function(){
        totalprice += parseInt(item.getAttribute("price")) 
        d2.innerHTML= x++
        //content.innerHTML +=item.getAttribute("name")+"<br/><br/>"
        modalBody.innerHTML += "<p>" +item.getAttribute("name") + "</p>"
        alert1.style.display="block"
        //content.style.padding="5px 14px"
        if(modalBody.innerHTML!=""){
            btn.style.display="block"
        }
        btn.setAttribute("data-content",totalprice +"$")
    }
    })
    //btn.onclick=function(){
      //  price1.innerHTML = totalprice +"$"
   // }
    