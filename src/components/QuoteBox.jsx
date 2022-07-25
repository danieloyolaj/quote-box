import React from 'react'

const QuoteBox = ({randomQuote, randomColors, getRandomAll}) => {


    //Style for the background card
    const objectStyle = {
        color: randomColors
    }

    //Style for the background button
    const objectBtnStyle = {
        backgroundColor: randomColors
    }


  return (
    <div className="card" style={objectStyle}>
        <div className="quote">
            <i className="fa-solid fa-quote-left" style={objectStyle}></i>
                <p className='card_quote'>{randomQuote.quote}</p>
        </div>
                <div className="card_container">
                    <p className='card_author'>{randomQuote.author}</p>
                </div>
        
          <div className="btn_container">
              <button onClick={getRandomAll} className='btn' style={objectBtnStyle}>&#62;</button>
          </div>
          
    </div>
  )
}

export default QuoteBox