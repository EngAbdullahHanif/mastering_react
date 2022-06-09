import React from "react";
import ReactDom from "react-dom";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71l9pCV99FL._AC_UL906_SR906,600_.jpg",
  author: "Colleen Hoover",
  title: "It Ends with Us: A Novel (1)"
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71l9pCV99FL._AC_UL906_SR906,600_.jpg",
  author: "Colleen Hoover",
  title: "It Ends with Us: A Novel (1)"
}


function BookList() {
  return(
    <section>
      <Book img={firstBook.img} author={firstBook.author} title={firstBook.title} />
      <Book img={secondBook.img} author={secondBook.author} title={secondBook.title} />
    </section>
    );
}

const Book = (props) => {
  return (
    <article>
      <img src={props.img} />
      <h1>{props.author}</h1>
      <h4>{props.title}</h4>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById("root"));
