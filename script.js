function Validateform(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    
    if (name===''){
        document.getElementById("name").innerHTML="Name is Required";
        alert("Name is Required");
        return false;

    }
    var emailreqx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailreqx.test(email)){
        document.getElementById('email').innerHTML="Invalid Mail";
        alert('Invalid Mail');
        return false;
    }
    alert('Form Submitted Successfully');
    return true;


}