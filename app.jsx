const quoteArr = [
  {
    text:"I love you the more in that I believe you had liked me for my own sake and for nothing else.",
    author:"John Keats"
  },
  {
    text:"But man is not made for defeat. A man can be destroyed but not defeated.",
    author:"Ernest Hemingway"
  },
  {
    text:"When you reach the end of your rope, tie a knot in it and hang on.",
    author:"Franklin D. Roosevelt"
  },
  {
    text:"There is nothing permanent except change.",
    author:"Heraclitus"
  },
  {
    text:"You cannot shake hands with a clenched fist.",
    author:"Indira Gandhi"
  }
];

var item = quoteArr[Math.floor(Math.random() * quoteArr.length)];

class Presentational extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      text: item.text,
      author:item.author
    };
    this.handleChange = this.handleChange.bind(this);
  };
  
 handleChange(){
   const newQuote = quoteArr[Math.floor(Math.random() * quoteArr.length)];
   this.setState({
     text: newQuote.text,
     author:newQuote.author
   });
  };
  
  render(){
    return (
      <div>
        <h2 id="text">"{this.state.text}"</h2>
        <p id="author"> -{this.state.author}</p>
        <button id="new-quote" onClick={this.handleChange}>new quote</button><br />
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">twitter</a>
      </div>
    );
  }
};
ReactDOM.render(<Presentational />,document.getElementById("quote-box"));
