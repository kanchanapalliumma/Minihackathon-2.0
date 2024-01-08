
function user(name,email,mobile_no){
    this.name=name
    this.email=email
    this.mobile_no=mobile_no
}
let defaultuser =[
new user("uma","uma@gmail.com","5768357909"),
new user("kavitha","kavi@gmail.com","0987658765"),
new user("preeti","preeti@gnouyhjv","09876543765"),
];
let library= defaultuser
function addbook(){
    let name=document.getElementById("name").value
    let email=document.getElementById("mail").value
    let mobile_no=document.getElementById("ph-no").value
    let User=new user(name,email,mobile_no)
    library.push(User)
    Displayuser()
    EmailDisplay()
    NameDisplay()
    NumberDisplay()
}

function Delete(){
    let message=prompt("Enter the name of user")
    for(i=0;i<library.length;i++){
        if(library[i].name===message){
            library.splice(i,1)
        }
    }
    Displayuser()
}
function Displayuser(books){
    let tbody=document.getElementById("booklist")
    tbody.textContent=""
    if(!books){
        books=library
    }
    for(let i=0;i<books.length;i++){
        let tr=document.createElement("tr")
        let td=document.createElement("td")
        td.innerHTML=books[i].name
        let tdemail=document.createElement("td")
        tdemail.innerHTML=books[i].email
        let tdno=document.createElement("td")
        tdno.innerHTML=books[i].mobile_no
        tdno.style.color="white"

        tr.appendChild(td)
        tr.appendChild(tdemail)
        tr.appendChild(tdno)

        tbody.appendChild(tr)
    }
}
function EmailDisplay(){
    let inputvalue_three=document.getElementById("mail").value.trim()
    let displayMessage_three=document.getElementById("alert-message-two")
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
}

function NameDisplay(){
    let inputvalue=document.getElementById("name").value
    let displayMessage=document.getElementById("alert-message-one")
    let regex=/^[a-zA-Z][a-zA-Z0-9]*$/;
    if (inputvalue===""){
        displayMessage.textContent="Please enter name"
    }else{
        displayMessage.innerHTML=""
        let Firstletter=inputvalue.charAt(0)
        if (Firstletter !== Firstletter.toUpperCase() || !inputvalue.match(regex) || inputvalue.length < 3 || inputvalue.length > 16) {
            displayMessage.innerHTML = " name must be alphanumeric and contain 3-16 characters"; 
        }else{
            displayMessage.innerHTML=""
        }
    }
}
function NumberDisplay(){
    let inputvalue_two=document.getElementById("ph-no").value
    let displayMessage_two=document.getElementById("alert-message-three")
    let regex= /^\d{10}$/;
    if(inputvalue_two==""){
        displayMessage_two.innerHTML="Please enter Mobile No"
    }else{
        displayMessage_two.innerHTML=""
        if(!inputvalue_two.match(regex) || inputvalue_two.length==10){
            displayMessage_two.innerHTML="Invalid Number"
        }else{
            displayMessage_two.innerHTML=""
        }
    }

}