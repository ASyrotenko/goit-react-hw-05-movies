import { Link } from 'react-router-dom';

import css from './movie-list.module.css';

const MovieList = ({ items }) => {
  const elements = items.map(({ id, title, poster_path }) => (
    <li key={id} className={css.movieLink}>
      <Link to="/">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          className={css.movieImg}
        />
        <p className={css.movieTitle}>{title}</p>
      </Link>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default MovieList;
