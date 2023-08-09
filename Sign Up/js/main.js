var signName= document.getElementById('signName') ;
var signEmail= document.getElementById('signEmail');
var signpass= document.getElementById('signPass');

var array=[]
if(localStorage.getItem('array') !=null){
    array= JSON.parse(localStorage.getItem('array'))

}else{
    array=[]
}

function signup() {
    if(signName.value=='' || signEmail.value=='' || signpass.value==''){
        document.getElementById('message').innerHTML=
        `<p>All Fields Is Required</p>`
    }else{
        var userobject={
            name:signName,
            Email:signEmail,
            Passward:signpass
        }
        array.push(userobject);
        location.href="../Login/index.html";

        localStorage.setItem('array' ,JSON.stringify(array));
    }
}