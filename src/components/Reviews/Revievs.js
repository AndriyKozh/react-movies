import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRewiews } from 'Servis/Api';
import { RevievsBlock, RevievsName, CastText } from './Reviews.style';

const Revievs = () => {
  const { id } = useParams();
  const [infoReviews, setinfoReviews] = useState([]);

  useEffect(() => {
    const getReviewsMovie = async () => {
      try {
        const reviews = await getRewiews(id);
        const revievsArr = reviews.results;
        setinfoReviews(revievsArr);
      } catch (error) {
        console.log(error);
      }
    };
    getReviewsMovie();
  }, [id]);

  return (
    <RevievsBlock>
      {infoReviews.length !== 0 ? (
        infoReviews.map(({ author, content, id }) => {
          return (
            <div key={id}>
              <RevievsName>{`Author: ${author}`}</RevievsName>
              <CastText>{content}</CastText>
            </div>
          );
        })
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </RevievsBlock>
  );
};

export default Revievs;
