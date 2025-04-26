let btnOpen = document.getElementById('open');
let btnClose= document.getElementById('close');
let container=document.getElementById('drop');

btnClose.onclick=function(){
    
    container.style.display="none";
}
btnOpen.onclick=function(){
    
    container.style.display="block";


   
}
