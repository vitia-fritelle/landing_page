let section, img;
section=document.getElementById("email");
img=new Image();
img.src=document.getElementById("fundo_email").src;
section.style.height=`${3*(img.height)}px`;
rep();

function rep(){
//diz quantas repetições da imagem de fundo eu devo ter
//para não quebrar
    let N = Math.floor(window.innerWidth/img.width);
    section.style.width=`${N*(img.width)}px`;
}

window.addEventListener("resize", (e)=>{rep();})

// setInterval( ()=>{
//     rep();
// },1000)