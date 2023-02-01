import { Routes, Route } from 'react-router-dom';

import HomePage from 'components/pages/HomePage/HomePage';
import MoviePage from 'components/pages/MoviePage/MoviePage';
import SingleMoviePage from 'components/pages/SingleMoviePage/SingleMoviePage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<HomePage />} />
      <Route path="/movies" element={<MoviePage />} />
      <Route path="/movies/:id" element={<SingleMoviePage />} />
    </Routes>
  );
};

export default UserRoutes;
