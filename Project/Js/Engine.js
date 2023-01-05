function  tampilan(){
    
var begitu=document.getElementById("form"). select1.value;
var p_tampilan=document.getElementById("container")

if (begitu =='Amri'){
    p_tampilan.innerHTML="Sukses";
}else if(begitu =='umur?'){
    p_tampilan.innerHTML="17";
}else{
    p_tampilan.innerHTML="masukkan dengan benar";
}
}


