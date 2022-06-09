import React from "react";
import ReactDom from "react-dom";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71l9pCV99FL._AC_UL906_SR906,600_.jpg",
    author: "Colleen Hoover",
    title: "It Ends with Us: A Novel (1)"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71l9pCV99FL._AC_UL906_SR906,600_.jpg",
    author: "Colleen Hoover",
    title: "It Ends with Us: A Novel (1)"
  }
];


function BookList() {
  return(
    <section>
     {books.map((book) => {
       return <Book book={book}></Book>
     })}
    </section>
    );
}

const Book = (props) => {
  const {img, author, title} =  props.book;
  return (
    <article>
      <img src={img} />
      <h1>{author}</h1>
      <h4>{title}</h4>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById("root"));
