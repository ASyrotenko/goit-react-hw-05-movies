import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom';

import css from './single-movie-page.module.css';

import { getSingleMovie } from 'components/shared/api/movies';

// const getReleaseDate = ({ release_date }) => {
//   return release_date.slice(0, 4);
// };

const SingleMoviePage = () => {
  const [item, setItem] = useState({});

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';
  const goBack = () => navigate(from);

  useEffect(() => {
    setLoading(true);
    const fetchMovie = async () => {
      try {
        const response = await getSingleMovie(id);
        setItem({ ...response });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    homepage,
  } = item;

  let genresList = '';
  let date = '';

  if (Object.keys(item).length) {
    genresList = genres.map(({ name }, idx) => {
      if (idx === genres.length - 1) {
        return `${name}.`;
      }
      return `${name}, `;
    });

    date = release_date.slice(0, 4);
  }

  return (
    <div className="container">
      {loading && <p>...Loading</p>}
      {error && <p>Oops. Something goes wrong. Please try again.</p>}
      <button type="button" onClick={goBack} className="btn">
        Go back
      </button>
      <div className={css.movie__wrap}>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          width="250"
        />
        <div className={css.info__wrap}>
          <h2 className={css.movie__title}>
            <a href={homepage} target="_black">
              {original_title} ({date})
            </a>
          </h2>
          <p className={css.movie__score}>User score: {vote_average}</p>
          <h3 className={css.movie__overviewTitle}>Overview</h3>
          <p className={css.movie__overviewText}>{overview}</p>
          <h3 className={css.movie__genresTitle}>Genres</h3>
          <p className={css.movie__genresList}>{genresList}</p>
        </div>
      </div>
      <Link state={{ from }} to={`/movies/${id}/credits`} className={css.cast}>
        Cast
      </Link>
      <Outlet />
    </div>
  );
};

export default SingleMoviePage;
