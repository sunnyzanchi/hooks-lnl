import React from 'react';

import CounterWithHooks from './withHooks/Counter';
import CounterWithoutHooks from './withoutHooks/Counter';

import ApiRequestWithHooks from './withHooks/ApiRequest';
import ApiRequestWithoutHooks from './withoutHooks/ApiRequest';

// The Hooks and class component versions of these components are
// functionally identical so anyone more familiar with the class components
// way of doing things can compare.
const App = () => (
  <div>
    {/* A simple counter */}
    <CounterWithHooks />
    <CounterWithoutHooks />

    {/* A Star Wars character search, makes a request to SWAPI */}
    {/* https://swapi.co/ */}
    <ApiRequestWithHooks />
    <ApiRequestWithoutHooks />
  </div>
);

export default App;
