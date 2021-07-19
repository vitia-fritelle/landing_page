function storage(){
    const name=document.getElementById("user_name").value;
    const email=document.getElementById("user_email").value;
    if(name!='' && email!=''){
        localStorage.setItem(email,name);
    }
}
