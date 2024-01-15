function name(){
    let booktitle=document.getElementsByClassName("name")[0].value.trim()
    let displayMessage=document.getElementsByClassName("alert-message")[0]
    if (booktitle===""){
        displayMessage.textContent="Please enter book title"
        return false;
    }else{
        displayMessage.textContent=""
        return true;
    }
}
function Author(){
    let author=document.getElementsByClassName("author")[0].value.trim()
    let displayMessage=document.getElementsByClassName("alert-message")[1]
    let regex=/^[a-zA-Z][a-zA-Z\s]*$/

    if (author===""){
        displayMessage.textContent="Please enter Author name"
        return false;
    }else{
        displayMessage.textContent=""
        let Firstletter=author. charAt(0)
        if(!author.match(regex) || Firstletter !== Firstletter.toUpperCase()){
            displayMessage.textContent="Name should be start with capital letter "
            return false;
        }else{
            displayMessage.textContent=""
            return true;
        }
    }
}

function Genre(){
    let genre=document.getElementsByClassName("genre")[0].value.trim()
    let displayMessage=document.getElementsByClassName("alert-message")[2]
    let regex=/^[a-zA-Z][a-zA-Z\s]*$/

    if (genre===""){
        displayMessage.textContent="Please enter genre"
        return false;
    }else{
        displayMessage.textContent=""
        // let Firstletter=Author.charAt(0)
        if(!genre.match(regex)){
            displayMessage.textContent="Please give proper genre name"
            return false;
        }else{
            displayMessage.textContent=""
            return true;
        }
    }
}

function Year(){
    let year=document.getElementsByClassName("year")[0].value.trim()
    console.log(year)
    let displayMessage=document.getElementsByClassName("alert-message")[3]
    let regex=/^\d+$/;
    if (year===""){
        displayMessage.textContent="Please enter year"
        return false;
    }else{
        displayMessage.textContent=""
        if(!year.match(regex) || year.length>4){
            displayMessage.textContent="Invalid year"
            return false;
        }else{
            displayMessage.textContent=""
            return true;
        }
    }
}

function BookId(){
    let bookId=document.getElementsByClassName("bookId")[0].value.trim()
    let displayMessage=document.getElementsByClassName("alert-message")[4]
    if (bookId===""){
        displayMessage.textContent="Please enter bookId"
        return false;
    }else{
        displayMessage.textContent=""
        return true;
    }
}

function book(title,author,genre,year,bookId){
    this.title=title
    this.author=author
    this.genre=genre
    this.year=year
    this.bookId=bookId
}


let defaultbooknames=[
    new book("To Kill a Mockingbird"," Harper Lee","Classic Fiction","1960","12f"),
    new book("The Great Gatsby"," F. Scott Fitzgerald","Classic Fiction","1925","67"),
]
let library=defaultbooknames
function Addbook(){

    let title=document.getElementsByClassName("name")[0].value
    let author=document.getElementsByClassName("author")[0].value
    let genre=document.getElementsByClassName("genre")[0].value
    let year=document.getElementsByClassName("year")[0].value
    let bookId=document.getElementsByClassName("bookId")[0].value

    let isnamevalid=name()
    let isauthorvalid=Author()
    let isbookidvalid=BookId()
    let isyearvalid=Year()
    let isgenerevalid=Genre()

    if (isnamevalid && isauthorvalid && isbookidvalid && isyearvalid && isgenerevalid){
        let count=0
        for(i=0;i<library.length;i++){
            if (title==library[i].title && author==library[i].author && genre==library[i].genre && year==library[i].year  && bookId==library[i].bookId){
                break;
            }else{
                count=count+1
            }
            }
            if (library.length==count){
                let bookdetails=new book(title,author,genre,year,bookId)
                library.push(bookdetails)
                displaybook()
            }else{
                document.getElementById("bookexist").textContent="Book is already EXist"
            }
        }
}


function Delete(i){
    library.splice(i,1)
    displaybook()
}


function displaybook(books){
    let tbody=document.getElementById("tablebody")
    tbody.textContent=""
    if(!books){
        books=library
    }
    for(let i=1;i<books.length;i++){
        let tr=document.createElement("tr")
        let tdtitle=document.createElement("td")
        tdtitle.innerHTML=books[i].title
        let tdauthorname=document.createElement("td")
        tdauthorname.innerHTML=books[i].author
        let tdgenre=document.createElement("td")
        tdgenre.innerHTML=books[i].mobile_no
        let tdyear=document.createElement("td")
        tdyear.innerHTML=books[i].year
        let tdbookid=document.createElement("td")
        tdbookid.innerHTML=books[i].year
        let tddelete=document.createElement("td")
        let button=document.createElement("button")
        button.innerHTML="Delete"
        button.addEventListener("click",function(){
            Delete(i)
        })
        button.setAttribute("id","delete")
        button.style.marginTop="-18px"
        button.style.marginBottom="10px"
        button.style.borderRadius="8px"
        tddelete.appendChild(button)
        let tdedit=document.createElement("td") 
        let edit=document.createElement("button")
        edit.innerHTML="Edit"
        edit.style.marginTop="-18px"
        edit.style.marginBottom="10px"
        edit.style.borderRadius="8px"
        edit.addEventListener("click",function(){
            Edit(i)
        })
        tdedit.appendChild(edit)

        tr.appendChild(tdtitle)
        tr.appendChild(tdauthorname)
        tr.appendChild(tdgenre)
        tr.appendChild(tdyear)
        tr.appendChild(tddelete)
        tr.appendChild(tdedit)

        tbody.appendChild(tr)
    }
}



function Edit(i){
    let title_=document.getElementById("title-one")
    let author=document.getElementById("author-one")
    let genre=document.getElementById("genre-one")
    let year=document.getElementById("year-one")
    let bookId=document.getElementById("bookid-one")
    
    title_.value = library[i].title;
    author.value = library[i].author;
    genre.value = library[i].genre;
    year.value = library[i].year
    bookId.value =library[i].bookId
    let buttonsave=document.createElement("button")
    buttonsave.innerHTML="Save Changes"
    // buttonsave.style.marginTop="-18px"
    buttonsave.addEventListener("click",function(){
        library[i].title=title_.value
        library[i].author=author.value
        library[i].genre=genre.value
        library[i].year=year.value
        library[i].bookId=bookId.value
        displaybook()

        let existingButton = document.getElementById("saveChangesButton");
        if (existingButton) {
            existingButton.parentNode.removeChild(existingButton);
        }
    })
    buttonsave.setAttribute("id", "saveChangesButton");
    document.getElementById("changesbtn").appendChild(buttonsave)
    // document.body.appendChild(buttonsave);
}