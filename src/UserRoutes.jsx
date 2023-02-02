import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('components/pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('components/pages/MoviePage/MoviePage'));
const SingleMoviePage = lazy(() =>
  import('components/pages/SingleMoviePage/SingleMoviePage')
);
const SingleMovieCreditsPage = lazy(() =>
  import('components/pages/SingleMovieCreditsPage/SingleMovieCreditsPage')
);

const SingleMovieReviewsPage = lazy(() =>
  import('components/pages/SingleMovieReviewsPage/SingleMovieReviewsPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="credits" element={<SingleMovieCreditsPage />} />
          <Route path="reviews" element={<SingleMovieReviewsPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
