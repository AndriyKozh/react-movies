import styled from 'styled-components';

export const MoviesListBlock = styled.div`
  margin-left: 20px;

  & div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    color: blue;

    & span {
      display: inline-block;
      width: 5px;
      height: 5px;
      border: 1px solid #000;
      background-color: red;
      margin-right: 5px;
      border-radius: 50%;
      margin-bottom: 5px;
      border: none;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
