function login(){
    EmailDisplay()
}
function EmailDisplay(){
    let inputvalue_three=document.getElementById("email").value.trim()
    let displayMessage_three=document.getElementById("message")
    let regex_email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (inputvalue_three===""){
        displayMessage_three.innerHTML="Please enter the Email"
    }else{
        displayMessage_three.innerHTML=""
        if (!inputvalue_three.match(regex_email)){
            displayMessage_three.innerHTML="Email must be a valid address,e.g.example@example.com"
        }else{
            displayMessage_three.innerHTML=""
        }
    }
    Password()
}
    function Password(){
        let inputvalue_four=document.getElementById("password").value.trim()
        let displayMessage_four=document.getElementById("message-one")
        let regex_Password=  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&_]{6,20}$/;

        if (inputvalue_four===""){
            displayMessage_four.innerHTML="Please enter password"
        }else{
            if(!inputvalue_four.match(regex_Password) || inputvalue_four < 8 ||inputvalue_four > 20){
                displayMessage_four.innerHTML="Password must be alphanumeric,it have to include special characters,numbers.password must contain atleast 8 characters"
            }else{
                displayMessage_four.innerHTML=""
            }
        }
    }
