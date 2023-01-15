function  tampilan(){
var user = document.getElementById("form").user.value;
var pass = document.getElementById("form").pass.value;
var p_container=document.getElementById("container")

if(user== "Mika" && pass== "mikachii") {
    location.href="uji tester web 3.html"
}
else if (user=="putra" && pass== "mikachii") {
    alert("welcome putra")
}
else {
    p_container.innerHTML="kata sandi atau username invalid";
}
}

