import React, { useState, useEffect } from "react";
import "./App.css";

export default function Simpsons() {
  const [quote, setQuote] = useState({});

  const giveMeAQuote = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.json())
      .then((data) => setQuote(data[0]));
  };

  useEffect(() => giveMeAQuote(), []);

  return (
    <div className="container">
      <h1>The Simpsons Quotes</h1>
      <img src={quote.image} alt="a Simpsons character" />
      <p className="quote">"{quote.quote}"</p>
      <p className="font">{quote.character}</p>
      <button type="button" onClick={giveMeAQuote}>
        Clic here to get <br />a new quote
      </button>
      <p />
    </div>
  );
}
