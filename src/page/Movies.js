import { useEffect, useState } from 'react';
import { getSubmit } from 'Servis/Api';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MoviesList';
import { MoviesInput, MoviesButton } from './Movies.style';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [submitContent, setSubmitContent] = useState([]);
  const queryRequest = searchParams.get('query') || '';

  useEffect(() => {
    if (!queryRequest) {
      return;
    } else {
      const submitQuery = async () => {
        try {
          const querySubmit = await getSubmit(queryRequest);
          const queryText = querySubmit;
          setSubmitContent(queryText);
        } catch (error) {}
      };
      submitQuery();
    }
  }, [queryRequest]);

  const onSubmit = e => {
    e.preventDefault();
    const searchParams = e.target.elements.query.value;
    if (searchParams.trim() === '') {
      console.log('asdasd');
    }
    setSearchParams({ query: searchParams });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <MoviesInput
          name="query"
          type="text"
          // autoComplete="off"
          // autoFocus
          // placeholder="Please type your query "
        />
        <MoviesButton type="submit">Search </MoviesButton>
      </form>
      <MovieList data={submitContent} />
    </div>
  );
};

export default Movies;
