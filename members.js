
function user(name,email,mobile_no){
    this.name=name
    this.email=email
    this.mobile_no=mobile_no
    // this.sl_no=sl_no
}
let defaultuser =[
new user("Uma","uma@gmail.com","6309117890"),
new user("Kavitha","kavi@gmail.com","7396324567"),
new user("Preeti","preeti@gmail.com","9553840345"),
];
let library= defaultuser
function addbook(){
    let name=document.getElementById("name").value
    let email=document.getElementById("mail").value
    let mobile_no=document.getElementById("ph-no").value

    let isEmailDisplayvalid=EmailDisplay()
    let isNameDisplayvalid=NameDisplay()
    let isNumberDisplayvalid=NumberDisplay()

    if (isEmailDisplayvalid && isNameDisplayvalid && isNumberDisplayvalid){
        let count=0
        for(i=0;i<library.length;i++){
            if (email==library[i].email && name==library[i].name && mobile_no==library[i].mobile_no){
                break;
            }else{
                count=count+1
            }
        }
        if(library.length===count){
            let User=new user(name,email,mobile_no)
            library.push(User)
            Displayuser()
            document.getElementById("exist-message").textContent=""
        }else{
            document.getElementById("exist-message").textContent="User already exists"
        }
    }
    // window.location.href="memberslist.html"
}

function Delete(i){
    library.splice(i,1)
    Displayuser()
}

function Edit(i){
    let names=document.getElementById("name")
    let mail=document.getElementById("mail")
    let phno=document.getElementById("ph-no")
    
    names.value = library[i].name;
    mail.value = library[i].email;
    phno.value = library[i].mobile_no
    let buttonsave=document.createElement("button")
    buttonsave.innerHTML="Save Changes"
    // buttonsave.style.marginTop="-18px"
    buttonsave.addEventListener("click",function(){
        library[i].name=names.value
        library[i].email=mail.value
        library[i].mobile_no=phno.value
        Displayuser()

        let existingButton = document.getElementById("saveChangesButton");
        if (existingButton) {
            existingButton.parentNode.removeChild(existingButton);
        }
    })
    buttonsave.setAttribute("id", "saveChangesButton");
    document.getElementById("makechanges").appendChild(buttonsave)
    // document.body.appendChild(buttonsave);
}

    // Displayuser()
function Displayuser(books){
    let tbody=document.getElementById("booklist")
    tbody.textContent=""
    if(!books){
        books=library
    }
    for(let i=1;i<books.length;i++){
        let tr=document.createElement("tr")
        let tdname=document.createElement("td")
        tdname.innerHTML=books[i].name
        let tdemail=document.createElement("td")
        tdemail.innerHTML=books[i].email
        let tdno=document.createElement("td")
        tdno.innerHTML=books[i].mobile_no
        tdno.style.color="white"
        let tddelete=document.createElement("td")
        // num.innerHTML=i
        let button=document.createElement("button")
        button.innerHTML="Delete"
        button.addEventListener("click",function(){
            Delete(i)
        })
        // num.style.padding="8px 15px"
        button.setAttribute("id","delete")
        button.style.marginTop="-18px"
        tddelete.appendChild(button)
        let tdedit=document.createElement("td") 
        let edit=document.createElement("button")
        edit.innerHTML="Edit"
        edit.style.marginTop="-18px"
        edit.addEventListener("click",function(){
            Edit(i)
        })
        // savebtn.appendChild(changesbtn)
        tdedit.appendChild(edit)

        tr.appendChild(tdname)
        tr.appendChild(tdemail)
        tr.appendChild(tdno)
        tr.appendChild(tddelete)
        tr.appendChild(tdedit)
        // tr.appendChild(savebtn)

        tbody.appendChild(tr)
    }
}
function EmailDisplay(){
    let inputvalue_three=document.getElementById("mail").value.trim()
    let displayMessage_three=document.getElementById("alert-message-two")
    let regex_email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (inputvalue_three===""){
        displayMessage_three.innerHTML="Please enter the Email"
        return false;
    }else{
        displayMessage_three.innerHTML=""
        if (!inputvalue_three.match(regex_email)){
            displayMessage_three.innerHTML="Email must be a valid address,e.g.example@example.com"
            return false;
        }else{
            displayMessage_three.innerHTML=""
            return true;
        }
    }
}

function NameDisplay(){
    let inputvalue=document.getElementById("name").value
    let displayMessage=document.getElementById("alert-message-one")
    let regex=/^[a-zA-Z][a-zA-Z0-9]*$/;
    if (inputvalue===""){
        displayMessage.textContent="Please enter name"
        return false;
    }else{
        displayMessage.innerHTML=""
        let Firstletter=inputvalue.charAt(0)
        if (Firstletter !== Firstletter.toUpperCase() || !inputvalue.match(regex)) {
            displayMessage.innerHTML = " Name must be alphanumeric and contain 3-16 characters"; 
            return false;
        }else{
            displayMessage.innerHTML=""
            return true;
        }
    }
}
function NumberDisplay(){
    let inputvalue_two=document.getElementById("ph-no").value
    let displayMessage_two=document.getElementById("alert-message-three")
    let regex= /^\d{10}$/;
    if(inputvalue_two==""){
        displayMessage_two.innerHTML="Please enter Mobile No"
        return false;
    }else{
        displayMessage_two.innerHTML=""
        if(!inputvalue_two.match(regex) || inputvalue_two.length!=10){
            displayMessage_two.innerHTML="Invalid Number"
            return false;
        }else{
            displayMessage_two.innerHTML=""
            return true;
        }
    }

}