function addbook(){
    bookname=i1.value
    author=i2.value
    imageurl=i3.value

    if(bookname in localStorage){
        alert("book already present")
    }
    else{
        book={bookname,author,imageurl}
        localStorage.setItem(bookname,JSON.stringify(book))
        alert("book added sucessfully")
        
    }
}
 function booksearch(){
    bookdetail=i4.value

    if(bookdetail in localStorage){
     book=JSON.parse(localStorage.getItem(bookdetail))
    

     result.innerHTML=
     `<div class="card" style="width: 18rem;">
        <img src=${book.imageurl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Book Name ${book.bookname}</h5>
          
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Author Name ${book.author}</li>
          
        </ul>
       
      </div>`
    }
    else{
       result.innerHTML=`<h3> result not fount</h3>`
    }
 }
