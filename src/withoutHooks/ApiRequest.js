import React from 'react';

class ApiRequest extends React.Component {
  state = {
    results: [],
    searching: false,
    term: ''
  };

  // This search call is imperative.
  // That is, you set the state for loading, then you have to make the API call
  // yourself, and when it's done, you need to set the state again.
  // It would be hard to use this in another component,
  // because that component might use different loading state,
  // it may get the search term a different way, etc.
  search = async () => {
    const { term } = this.state;

    this.setState({ searching: true });

    const results = await fetch(`https://swapi.co/api/people?search=${term}`)
      .then(res => res.json())
      .then(data => data.results);

    this.setState({ results, searching: false });
  };

  setTerm = e => this.setState({ term: e.target.value });

  render() {
    const { results, searching, term } = this.state;

    return (
      <div>
        <label>Search</label>
        <input onChange={this.setTerm} value={term} />
        <button onClick={this.search}>Search</button>

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
  }
}

export default ApiRequest;
