import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './single-movie-credits-page.module.css';

import { getSingleMovieCredits } from 'components/shared/api/movies';
import defaultActorImg from '../../../images/default-actor-img.jpg';

const SingleMovieCreditsPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchCredits = async () => {
      try {
        const response = await getSingleMovieCredits(id);
        setCast([...response.cast]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, [id]);

  const elements = cast.map(({ id, profile_path, name, character }) => {
    const avatar = `https://image.tmdb.org/t/p/original/${profile_path}`;
    return (
      <li key={id} className={css.cast__item}>
        <img
          src={profile_path ? avatar : defaultActorImg}
          alt={name}
          width="150"
          height="225"
        />
        <p className={css.actor__name}>{name}</p>
        <p className={css.actor__character}>
          as <b>{character}</b>
        </p>
      </li>
    );
  });

  return (
    <>
      {loading && <p>...loading</p>}
      {error && <p>Oops. Something goes wrong. Please try again.</p>}
      <ul className={css.cast__list}>{elements}</ul>
    </>
  );
};

export default SingleMovieCreditsPage;
