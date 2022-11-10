import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { getMoviesInfo } from 'Servis/Api';
import { AiFillBackward } from 'react-icons/ai';
import { LoadingContent } from 'Loading.style';
import {
  MovieDetailsBlock,
  MovieDetailsImgBlock,
  MovieDetailsImg,
  MovieDetailsBack,
  MovieDetailsInfo,
  MovieDetailsInfoAdditional,
  MovieDetailsInfoSpan,
  MovieDetailsInfoList,
} from './MovieDetails.style';

const MovieDetails = () => {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState('');
  // const navigate = useNavigate();
  // const backLinkHref = () => navigate(-1);
  const location = useLocation();
  const linkBack = location.state?.from ?? '/movies';
  const { poster_path, title, release_date, overview, genres, vote_average } =
    movieInfo;

  useEffect(() => {
    const movieInfo = async () => {
      try {
        const movie = await getMoviesInfo(id);
        setMovieInfo(movie);
      } catch (error) {}
    };
    movieInfo();
  }, [id]);
  return (
    <>
      <Link to={linkBack}>
        <MovieDetailsBack>
          <AiFillBackward /> Go Back
        </MovieDetailsBack>
      </Link>
      <MovieDetailsBlock>
        <MovieDetailsImgBlock>
          <MovieDetailsImg
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://via.placeholder.com/300x400'
            }
            alt={`${title} poster`}
          />
        </MovieDetailsImgBlock>
        <MovieDetailsInfo>
          <h2>{`${title} (${release_date})`} </h2>
          <p>User score: {Math.floor((vote_average / 10) * 100)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres
              ? genres.map(({ id, name }) => <span key={id}>{name}</span>)
              : ''}
          </p>
        </MovieDetailsInfo>
        <hr />
      </MovieDetailsBlock>
      <hr />
      <h3>Additional informstion</h3>
      <MovieDetailsInfoAdditional>
        <MovieDetailsInfoList>
          <MovieDetailsInfoSpan></MovieDetailsInfoSpan>
          <Link to="cast" state={{ from: linkBack }}>
            Cast
          </Link>
        </MovieDetailsInfoList>
        <MovieDetailsInfoList>
          <MovieDetailsInfoSpan></MovieDetailsInfoSpan>
          <Link to="reviews" state={{ from: linkBack }}>
            Reviews
          </Link>
        </MovieDetailsInfoList>
      </MovieDetailsInfoAdditional>
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
      ></Suspense>
      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;
