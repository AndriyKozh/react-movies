import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MoviesListBlock } from './MoviesList.style';
import PropTypes from 'prop-types';

function MovieDetails({ data }) {
  const location = useLocation();

  return (
    <MoviesListBlock>
      {data.map(titleFilm => (
        <div key={titleFilm.id}>
          <span></span>
          <Link to={`/movies/${titleFilm.id}`} state={{ from: location }}>
            <div>{titleFilm.title}</div>
          </Link>
        </div>
      ))}
    </MoviesListBlock>
  );
}

MovieDetails.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieDetails;
