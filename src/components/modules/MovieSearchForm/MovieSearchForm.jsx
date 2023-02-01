import { useState } from 'react';

// import css from './movie-search-form.module.css';

const MovieSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setState(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        value={state}
        onChange={handleChange}
        placeholder="Type movie name"
        required
      />
      <button type="submit">Find</button>
    </form>
  );
};

export default MovieSearchForm;
