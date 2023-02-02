import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

import MovieList from '../MovieList/MovieList';

import { getTrendingMovies } from '../../shared/api/movies';
import { smoothScroll } from '../../shared/scripts/smoothScroll';

import css from './movies.module.css';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  };

  return (
    <>
      {loading && (
        <div className="loading__container">
          <TailSpin color="#2196f3" />
        </div>
      )}
      {error && <p>Error</p>}
      {<MovieList items={items} />}
      {items.length > 0 && (
        <button
          type="button"
          onClick={onLoadMore}
          className={`btn ${css.loadMoreBtn}`}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default Movies;
