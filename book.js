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
    let genre=document.getElementsByClassName("author")[0].value.trim()
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
        // let Firstletter=Author.charAt(0)
        if(!year.match(regex)){
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


let defaultbooknames=[
    new book("To Kill a Mockingbird"," Harper Lee","Classic Fiction","1960","12f"),
    new book("The Great Gatsby"," F. Scott Fitzgerald","Classic Fiction","1925"),
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



function book(title,author,genre,year,bookId){
    this.title=title
    this.author=author
    this.genre=genre
    this.year=year
    this.bookId=bookId
}

function displaybook(books){
    let tbody=document.getElementById("tablebody")
    tbody.textContent=""
    if(!books){
        books=library
    }
    for(i=0;i<books.length;i++){
        let tr=document.createElement("tr")
        let title=document.createElement("td")
        title.innerHTML=books[i].title
        let authorname=document.createElement("td")
        authorname.innerHTML=books[i].author
        let genre_=document.createElement("td")
        genre_.innerHTML=books[i].genre
        let year_=document.createElement("td")
        year_.innerHTML=books[i].year
        let bookId_=document.createElement("td")
        bookId_.innerHTML=books[i].bookId
        let button=document.createElement("button")
        button.innerHTML="ClearAll"
        let clearbtn=document.createElement("td")
        button.addEventListener("click",function(){
            Delete(i)
        })
        clearbtn.appendChild(button)
        let editbutton=document.createElement("td")
        let edit=document.createElement("button")
        edit.innerHTML="Edit"
        edit.addEventListener("click",function(){
            Edit(i)
        })
        editbutton.appendChild(edit)

        tr.appendChild(title)
        tr.appendChild(authorname)
        tr.appendChild(genre_)
        tr.appendChild(year_)
        tr.appendChild(bookId_)
        tr.appendChild(clearbtn)
        tr.appendChild(editbutton)

        tbody.appendChild(tr)
    }
}


function Delete(i){
    library.splice(i,1)
    displaybook()
}

function Edit(i) {
    console.log(i)
    let title_ = document.getElementById("title-one");
    let author = document.getElementById("author-one");
    let genre = document.getElementById("genre-one")
    let year = document.getElementById("year-one")
    let bookId = document.getElementById("bookid-one")
    console.log(library.length)

    title_.value=library[i].title
    author.value=library[i].author
    genre.value=library[i].genre
    year.value=library[i].year
    bookId.value=library[i].bookId


    let savebutton = document.createElement("button");
    savebutton.innerHTML = "Save Changes";
    savebutton.addEventListener("click", function () {
        library[i].title = title_.value;
        library[i].author = author.value;
        library[i].genre = genre.value;
        library[i].year = year.value;
        library[i].bookId = bookId.value;
        displaybook();

        let existbook = document.getElementById("bookchange");
        if (existbook) {
            existbook.parentNode.removeChild(existbook);
        }
        savebutton.setAttribute("id", "bookchange");
        document.getElementById("changesbtn").appendChild(savebutton);

    });
}

