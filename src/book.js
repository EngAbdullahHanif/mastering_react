const Book = (props) => {
    const {img, author, title} =  props;
    const clickHandler = () => {
      console.log('I was triggered during componentDidMount')
      // alert("Great Shot!");
  
    };
    
    return (
      <article className="book">
        <img src={img} style={{width:'200px'}} />
        <h1 onClick={()=> {console.log('this is console')}} >{author}</h1>
        <h4 >{title}</h4>
        <button onClick={clickHandler}>click here</button>
      </article>
    );
  };
  
export default Book;