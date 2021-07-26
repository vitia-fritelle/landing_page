//changeColor não está funcionando por algum motivo
function changeColor(id){
    let ele = document.getElementById(id);
    ele.style.color="ff0000";
}

//cria uma mensagem de aviso para indicar o usuário
//que deve inserir dados nos campos
function aviso(){
    let msg = document.createElement("p");
    msg.id= "aviso";
    const aviso = document.createTextNode("Insira um nome e um email.");
    msg.appendChild(aviso);
    let pNew = document.getElementById("email_text_background");
    pNew.appendChild(msg);
    changeColor(msg.id);
}


//guarda os valores adquiridos no localStorage
function storage(){
    const name=document.getElementById("user_name").value;
    const email=document.getElementById("user_email").value;
    const msg = document.getElementById("aviso");
    if(name!='' && email!=''){
        localStorage.setItem(email,name);
        if (msg!==null){msg.remove();}
    } else if (msg===null) {aviso();}
}
