function  tampilan(){
var user = document.getElementById("form").user.value;
var pass = document.getElementById("form").pass.value;
var p_container=document.getElementById("container")

if(user== "Mika" && pass== "mikachii") {
    location.href="Halaman_2.html"
}
else if (user=="putra" && pass== "mikachii") {
    alert("welcome putra")
}
else {
    p_container.innerHTML="kata sandi atau username invalid";
}
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById('pass');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
};
