import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './single-movie-reviews-page.module.css';

import { getSingleMovieReviews } from 'components/shared/api/movies';

const SingleMovieReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchCredits = async () => {
      try {
        const { results } = await getSingleMovieReviews(id);
        setReviews([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id} className={css.review__item}>
      <p className={css.review__author}>
        Author: <b>{author}</b>
      </p>
      <p className={css.review__content}>{content}</p>
    </li>
  ));
  return <ul className={css.review__list}>{elements}</ul>;
};

export default SingleMovieReviewsPage;
