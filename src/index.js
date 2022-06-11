import React from "react";
import ReactDom from "react-dom";

const books = [
  {
    id: 1, 
    img: "https://images-na.ssl-images-amazon.com/images/I/71l9pCV99FL._AC_UL906_SR906,600_.jpg",
    author: "Colleen Hoover",
    title: "It Ends with Us: A Novel (1)"
  }
  ,
  {
    id: 2, 
    img: "https://images-na.ssl-images-amazon.com/images/I/71l9pCV99FL._AC_UL906_SR906,600_.jpg",
    author: "Colleen Hoover",
    title: "It Ends with Us: A Novel (1)"
  }
];


function BookList() {
  
  return(
    <section>
    {books.map((book) => {
      return <Book key={book.id} {...book}></Book>
    })}
    </section>
    );
}


const Book = (props) => {
  const {img, author, title} =  props;
  const clickHandler = () => {
    console.log('I was triggered during componentDidMount')
    // alert("Great Shot!");

  };
  
  return (
    <article>
      <img src={img} />
      <h1 onClick={()=> {console.log('this is console')}} >{author}</h1>
      <h4 >{title}</h4>
      <button onClick={clickHandler}>click here</button>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById("root"));
