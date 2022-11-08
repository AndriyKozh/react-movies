// 68dd2d07f1b8d9799366e4d9411e689b

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import Movies from '../page/Movies';
import MainLayaut from './MainLayout/MainLayaut';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Revievs from './Reviews/Revievs';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayaut />}>
            <Route index element={<Home />}></Route>
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Revievs />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
