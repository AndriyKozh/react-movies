// 68dd2d07f1b8d9799366e4d9411e689b

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Revievs from './Reviews/Revievs';
const Home = lazy(() => import('../page/Home'));
const Movies = lazy(() => import('../page/Movies'));
const MainLayaut = lazy(() => import('./MainLayout/MainLayaut'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Revievs = lazy(() => import('./Reviews/Revievs'));

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path="/" element={<MainLayaut />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="movies/:id" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Revievs />} />
              </Route>
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
