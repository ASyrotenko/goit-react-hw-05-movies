import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingMovies } from 'components/shared/api/movies';
import { smoothScroll } from 'components/shared/smoothScroll';

import css from './home-page.module.css';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('useEffect');
    const fetchAPI = async () => {
      setLoading(true);
      try {
        const result = await getTrendingMovies(page);
        if (page === 1) {
          return setItems([...result.results]);
        }
        setItems(prevState => [...prevState, ...result.results]);
        smoothScroll(page);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, [page]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
    console.log('click');
  };

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

  return (
    <div className="container">
      <h2>Trending today</h2>
      {loading && <p>...Loading</p>}
      {error && <p>Error</p>}
      <ul className={css.list}>{elements}</ul>
      <button type="button" onClick={onLoadMore} className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default HomePage;
