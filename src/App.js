import './App.css';
import {useEffect, useState} from 'react';

const IMAGE_URL = "https://pixabay.com/api/?key=34580858-7b9dabaf1f7f4980f5e6b2f34&image_type=photo&orientation=horizontal&category=nature"
const QUOTE_URL = "http://api.quotable.io/random"

function App() {

  const [image, setImage] = useState("");
  const [quotes, setQuotes] = useState("");
 
  const fetchImage = () =>{

    fetch(IMAGE_URL)
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.hits.length);
      setImage(data.hits[randomIndex]);
    })
    .catch(error => console.error(error));

  }
 
  const fetchQuote = ()=>{

    fetch(QUOTE_URL )
    .then(res => res.json())
    .then(data => setQuotes(data))
    .catch(error => console.error(error));
  }

  useEffect(() => {

    fetchImage();
    fetchQuote();
  
  }, [])

  return (
    <div className='MyApp'>
      <div className='header'>
        <h2>Quotify</h2>
      </div>
      <div className='base'>
      <div className='bgImage'>
      <img src={image.largeImageURL} alt={image.tags} />
      <div className='quoteText'>
        <p className="myQuote">{quotes.content}</p>
        <p className='author'>{quotes.author}</p>
      </div>
      </div>
      <div className='mybuttons'>
      <button onClick ={fetchQuote} >New Quote</button> 
      <button onClick ={fetchImage}>New Image</button>
      </div>
      </div>
    </div>
  );
}

export default App;