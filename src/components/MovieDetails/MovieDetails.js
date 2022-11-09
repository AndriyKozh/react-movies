import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { getMoviesInfo } from 'Servis/Api';
import { AiFillBackward } from 'react-icons/ai';
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
  const navigate = useNavigate();
  const backLinkHref = () => navigate(-1);
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/';
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
      <Link onClick={backLinkHref}>
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
          <Link to="cast">Cast</Link>
        </MovieDetailsInfoList>
        <MovieDetailsInfoList>
          <MovieDetailsInfoSpan></MovieDetailsInfoSpan>
          <Link to="reviews">Reviews</Link>
        </MovieDetailsInfoList>
      </MovieDetailsInfoAdditional>
      <Suspense fallback={<div>Loading ...</div>}></Suspense>
      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;
