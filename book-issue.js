function idDisplay(){
    let inputvalue=document.getElementsByClassName("id")[0].value.trim()
    let displayMessage=document.getElementsByClassName("alert-message")[0]
    if (inputvalue===""){
        displayMessage.textContent="Please enter Book Id"
        return false;
    }else{
        displayMessage.textContent=""
            return true;
        }
    }

function UserIdDisplay(){
    let inputvalue=document.getElementsByClassName("user")[0].value.trim()
    let displayMessage=document.getElementsByClassName("alert-message")[1]
    if (inputvalue===""){
        displayMessage.textContent="Please enter UserId"
            return false;
    }else{
        displayMessage.textContent=""
            return true;
    }
 }

function periodDisplay(){
    let inputvalue_two=document.getElementsByClassName("period")[0].value.trim()
    let displayMessage_two=document.getElementsByClassName("alert-message")[2]
    let regex = /^\d+$/;

    if(inputvalue_two==""){
        displayMessage_two.textContent="Please enter period"
            return false;
    }else{
        displayMessage_two.textContent=""
            if(!inputvalue_two.match(regex)){
                displayMessage_two.textContent="please give correct number"
                return false;
            }else{
                displayMessage_two.textContent=""
                    return true;
            }
    }
        
}

function DateDisplay(){
    let inputvalue=document.getElementsByClassName("date")[0].value.trim()
    let displayMessage=document.getElementsByClassName("alert-message")[3]
    if (inputvalue===""){
        displayMessage.textContent="Please select Date"
            return false;
    }else{
        displayMessage.textContent=""
            return true;
    }
}


function data(id,user,period,date){
    this.id=id
    this.user=user
    this.period=period
    this.date=date
}


let defaultuser =[
new data("45","1","10","2024/2/3"),
new data("15","10","19","2024/2/23"),
new data("10","67","23","2024/2/2"),
];

let library=defaultuser
function issue(){
    let id=document.getElementsByClassName("id")[0].value
    let user=document.getElementsByClassName("user")[0].value
    let period=document.getElementsByClassName("period")[0].value
    let date=document.getElementsByClassName("date")[0].value

    let isidvalid=idDisplay()
    let isuserDisplayvalid=UserIdDisplay()
    let isperiodbvalid=periodDisplay()
    let isdatevalid=DateDisplay()

    if (isidvalid && isuserDisplayvalid && isperiodbvalid && isdatevalid){
        let count=0
        for(i=0;i<library.length;i++){
            if (id==library[i].id && user==library[i].user){
                break;
            }else{
                count=count+1
            }
        }
        if(library.length===count){
            let issuedata=new data(id,user,period,date)
            library.push(issuedata)
            BookIssue()
            document.getElementById("exist-message").textContent=""
        }else{
            document.getElementById("exist-message").textContent="Book already Issued"
        }
    }
}

function BookIssue(books){
    let tbody=document.getElementById("tablebody")
    tbody.textContent=""
    if(!books){
        books=library
    }
    for(let i=1;i<books.length;i++){
        let tr=document.createElement("tr")
        let tdbookid=document.createElement("td")
        tdbookid.innerHTML=books[i].id
        let tduserid=document.createElement("td")
        tduserid.innerHTML=books[i].user
        let tdperiod=document.createElement("td")
        tdperiod.innerHTML=books[i].period
        let tddate=document.createElement("td")
        tddate.innerHTML=books[i].date
        let tdedit=document.createElement("td") 
        let edit=document.createElement("button")
        edit.innerHTML="Edit"
        edit.style.marginTop="-17px"
        edit.style.borderRadius="5px"
        edit.style.marginBottom="10px"
        edit.addEventListener("click",function(){
            Edit(i)
        })
        tdedit.appendChild(edit)

        tr.appendChild(tdbookid)
        tr.appendChild(tduserid)
        tr.appendChild(tdperiod)
        tr.appendChild(tddate)
        tr.appendChild(tdedit)

        tbody.appendChild(tr)
    }
}


function Edit(i){
    let id_=document.getElementsByClassName("id")[0]
    let userid=document.getElementsByClassName("user")[0]
    let periodtime=document.getElementsByClassName("period")[0]
    let date_=document.getElementsByClassName("date")[0]
    
    id_.value = library[i].id;
    userid.value = library[i].user;
    periodtime.value = library[i].period
    date_.value =library[i].date
    let buttonsave=document.createElement("button")
    buttonsave.innerHTML="Save Changes"
    buttonsave.addEventListener("click",function(){
        library[i].id=id_.value
        library[i].user=userid.value
        library[i].period=periodtime.value
        library[i].date=date_.value
        BookIssue()

        let existingButton = document.getElementById("saveChangesButton");
        if (existingButton) {
            existingButton.parentNode.removeChild(existingButton);
        }
    })
    buttonsave.setAttribute("id", "saveChangesButton");
    document.getElementById("makechanges").appendChild(buttonsave)
    // document.body.appendChild(buttonsave);
}

