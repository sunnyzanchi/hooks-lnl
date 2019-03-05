import React, { useEffect, useState } from 'react';

const ApiRequest = () => {
  // Hooks makes it really easy to declare separate, discrete pieces of state
  // With classes, you only get one update function, `setState`.
  // But with each piece of state you declare, you also get a function just to
  // update that one state. How nice! 😊
  const [searching, setSearching] = useState('');
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState('');

  // `useEffect` is a bit harder to wrap your head around in my onion.
  // In a class component, (and just in general) API requests
  // are typically imperative — when the user clicks a button, etc,
  // the code must call the method to call the API,
  // and that method updates state.
  //
  // `useEffect` falls into Hooks' theme of being _declarative_.
  // `useEffect` declares:
  // > When any of these _things_ (2nd argument, the array) change,
  // > I'll do _something_ (1st argument, the function)
  //
  // Rather than explicitly calling a function to get data,
  // you just update your state and let Hooks determine what should happen.
  // The benefit is that you don't need to worry about lifecycle methods,
  // and reusing logic is really easy.
  // You can extract this out into its own custom hook, pass it what it needs
  // (searching, term, functions to update the two) and reuse it anywhere that
  // needs a search. You can abstract it to your heart's content, say to call
  // a different API, take search options, etc.
  useEffect(() => {
    if (!searching) {
      return;
    }

    if (!term) {
      setSearching(false);
      return;
    }

    fetch(`https://swapi.co/api/people?search=${term}`)
      .then(res => res.json())
      .then(data => data.results)
      .then(setResults)
      .then(() => setSearching(false));
  }, [searching]);

  return (
    <div>
      <label>Search</label>
      <input onChange={e => setTerm(e.target.value)} value={term} />
      <button onClick={() => setSearching(true)}>Search</button>

      {searching && 'Loading...'}
      {!searching && (
        <ul>
          {results.map(r => (
            <li>{r.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiRequest;
