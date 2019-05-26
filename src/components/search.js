import React, { useState } from 'react';

function Search(props) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/${query}`);
  };

  return (
    <div id="search">
      <h1>Gif Weather</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search a location"
          required
        />
      </form>
    </div>
  );
}

export default Search;
