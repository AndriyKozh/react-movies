import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Servis/Api';
import { CastBlock, CastBlockImg, CastImg } from './Cast.style';

const Cast = () => {
  const { id } = useParams();
  const [infoCasts, setInfoCast] = useState([]);

  useEffect(() => {
    const getCastMovie = async () => {
      try {
        const getCastArr = await getCast(id);
        const castData = getCastArr.cast;
        setInfoCast(castData);
      } catch (error) {}
    };
    getCastMovie();
  }, [id]);

  return (
    <CastBlock>
      {infoCasts.map(({ id, profile_path, original_name }) => {
        return (
          <CastBlockImg key={id}>
            <CastImg
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : 'https://via.placeholder.com/100x150'
              }
              alt={original_name}
            />
            <h3>{original_name}</h3>
          </CastBlockImg>
        );
      })}
    </CastBlock>
  );
};

export default Cast;
