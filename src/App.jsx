import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import colors from './utils/colors'
import quotes from './utils/quotes.json'

function App() {

  //gets any random element and returns it as an index of the array
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom];
  }

  let quoteRandom = getRandomElement(quotes) //returns a random quote
  let colorRandom = getRandomElement(colors) //returns a random color
  
  //Using the states
  const [randomQuote, setRandomQuote] = useState(quoteRandom);
  const [randomColors, setRandomColor] = useState(colorRandom);

  //Style for the background color of the body
  const objectStyle = {
    backgroundColor: randomColors
  }

  //changes colors
  const getRandomAll = () => {
    quoteRandom = getRandomElement(quotes)
    colorRandom = getRandomElement(colors)

    setRandomQuote(quoteRandom)
    setRandomColor(colorRandom)
  }


  return (
    <div className="App" style={objectStyle}>
      <QuoteBox 
        randomQuote={randomQuote} 
        randomColors={randomColors} 
        getRandomAll={getRandomAll}/>
    </div>
  )
}

export default App
