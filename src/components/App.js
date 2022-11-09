// 68dd2d07f1b8d9799366e4d9411e689b

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { LoadingContent } from '../Loading.style';

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
        <Suspense
          fallback={
            <LoadingContent>
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            </LoadingContent>
          }
        >
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
