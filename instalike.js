var con=document.querySelector("#container")
var heart=document.querySelector("i")
con.addEventListener("dblclick" ,function(){
heart.style.transform= 'translate(-50% , -50%) scale(2)'
setTimeout(function(){
    heart.style.transform= 'translate(-50% , -50%) scale(0)'
},500)
})
