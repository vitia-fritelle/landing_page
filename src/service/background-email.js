let section, img;
section=document.getElementById("email");
img=new Image();
img.src=document.getElementById("fundo_email").src;
section.style.height=`${3*(img.height)}px`;
//rep();
//window.onresize = rep(); 

function rep(){
    let N = Math.floor(window.innerWidth/img.width);
    section.style.width=`${N*(img.width)}px`;
}