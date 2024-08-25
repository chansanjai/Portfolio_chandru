// display- change black
document.getElementById('moon').addEventListener("click",function(){
    document.getElementById('sun').style.display="inline"
    document.body.style.backgroundColor="  rgb(25, 1, 39)";
    document.body.style.color="white";
    document.getElementById('service-border-1').style.border="2px solid white"
    document.getElementById('service-border-2').style.border="2px solid white"
    document.getElementById('service-border-3').style.border="2px solid white"
    document.getElementById('service-border-4').style.border="2px solid white"
    document.getElementById('border-color-1').style.border="2px solid white"
    document.getElementById('border-color-2').style.border="2px solid white"
    document.getElementById('border-color-3').style.border="2px solid white"
    document.getElementById("moon").style.display="none";
     document.getElementById('nav-bar-black').style.backgroundColor=" rgb(25, 1, 39)" 
})
document.getElementById('sun').addEventListener("click",function(){
    document.getElementById('nav-bar-black').style.backgroundColor="white" 
    document.body.style.backgroundColor="white"
    document.body.style.color="black";
    document.getElementById('service-border-1').style.border="2px solid black"
    document.getElementById('service-border-2').style.border="2px solid black"
    document.getElementById('service-border-3').style.border="2px solid black"
    document.getElementById('service-border-4').style.border="2px solid black"
    document.getElementById('border-color-1').style.border="2px solid black"
    document.getElementById('border-color-2').style.border="2px solid black"
    document.getElementById('border-color-3').style.border="2px solid black"
    document.getElementById('sun').style.display="none"
    document.getElementById('moon').style.display="inline"

})
document.getElementById('show-link').addEventListener("click",function(){
    document.getElementById('show-in').style.display="block";
})
document.getElementById('link-hide').addEventListener("click",function(){
    document.getElementById('show-in').style.display="none";
})
