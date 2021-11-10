import React,{useEffect, useState} from 'react';
import './App.css';
let quoteDBurl ="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quote ,setQuote] =useState( "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.")
  const [author,setAuthor] =useState ("bob dylan")
  const [randomNumber , setRandomNumber] = useState(0)
  const [quotesArray,setQuotesArray] =useState(null)
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }
  useEffect(() =>{
   
    fetchQuotes(quoteDBurl)
  },[quoteDBurl])


  const generateRandomQuote = () => {
    let randomInteger =Math.floor(quotesArray.length* Math.random())
    setRandomNumber(randomInteger)
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
    if (randomInteger === 0){
      setQuote(quotesArray[0].quote)
      setAuthor(quotesArray[0].author)


    }
    if (randomInteger === 1){
      setQuote(quotesArray[1].quote)
      setAuthor(quotesArray[1].author)


    }
    if (randomInteger === 2){
      setQuote(quotesArray[2].quote)
      setAuthor(quotesArray[2].author)
      


    }
  }
  //const OurquotesArray =[{quote:"Life is too short to be depressed",author:"kariuki wangai"},{quote:"Our lives begin to end the day we become silent about things that matter.",author:"Martin Luther King Jr."},{quote:"The only way to do great work is to love what you do.",author:"Steve Jobs"}]
  
  
    return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
        <h1>Random Quote: {randomNumber}</h1>
         
        <p id="text">
          "{quote}"
        </p>
        <button id="new-quote" onClick= {()=>generateRandomQuote()}>Generate A Random Qoute</button>
      <p id="author">
       - { author}
      </p>
      <a id="tweet-quote" href={'https://www.twitter.com/intent/tweet?text=hello'}>tweet quote</a>
     
    </div>
      </header>
    </div>
  );
}

export default App;
