var array=[] ;
array=JSON.parse(localStorage.getItem('array')) ;
var LoginEmail= document.getElementById('signEmail');
var LoginPass= document.getElementById('signpass');
document.getElementById('login').addEventListener('click', function ()
{
    if (LoginEmail.value=='' || LoginPass.value==''){
        document.getElementById('message').innerHTML=       `<p>All Fields Is Required</p>`;

    }else{
        checkuser() ;
    }

})

function checkuser(){
    for(i=0; i<array.length; i++){
        if(LoginEmail.value==array[i].Email && LoginPass.value==array[i].passward) {
            var add=array[i].name ;
            localStorage.setItem('userName' , add);
            location.href='../../homepage/index.html';
            break;
        }
    }
}