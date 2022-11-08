import MovieDetails from '../components/MovieList/MoviesList';
import { getTrendingMovies } from 'Servis/Api';
import { useEffect, useState } from 'react';
import { HomeTitleStyle } from './Home.style';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const arrInfoFilms = await getTrendingMovies();
        setData(arrInfoFilms.results);
      } catch (error) {
        console.log(error);
      }
    };
    getTrending();
  }, []);

  return (
    <div>
      <div>
        <HomeTitleStyle>Tranding today</HomeTitleStyle>
        <MovieDetails data={data} />
      </div>
    </div>
  );
};

export default Home;
