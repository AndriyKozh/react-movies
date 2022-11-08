import styled from 'styled-components';

export const MoviesInput = styled.input`
  margin: 20px 0 0 20px;
  width: 30%;
  height: 30px;
  border: none;
  border-bottom: 3px solid #d84315;
  font-size: 20px;
`;

export const MoviesButton = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 20px;

  &:hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
  }
`;
