import { useState, useEffect } from 'react';

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
        console.log(items);
        const result = await getTrendingMovies(page);
        if (page === 1) {
          return setItems([...result.results]);
        }
        setItems(prevState => [...prevState, ...result.results]);
        console.log(items);
        smoothScroll(page);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        console.log(items);
      }
    };

    fetchAPI();
  }, [page]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>Error</p>}
      {<MovieList items={items} />}
      <button
        type="button"
        onClick={onLoadMore}
        className={`btn ${css.loadMoreBtn}`}
      >
        Load more
      </button>
    </>
  );
};

export default Movies;
