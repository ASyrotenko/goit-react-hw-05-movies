import { Routes, Route } from 'react-router-dom';

import HomePage from 'components/pages/HomePage/HomePage';
import MoviePage from 'components/pages/MoviePage/MoviePage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviePage />} />
    </Routes>
  );
};

export default UserRoutes;