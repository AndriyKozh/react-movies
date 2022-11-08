import styled from 'styled-components';

export const MovieDetailsBack = styled.button`
  display: inline-block;
  display: flex;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background-color: red;
    color: white;
  }
`;

export const MovieDetailsBlock = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const MovieDetailsImgBlock = styled.div`
  min-width: 300px;
  min-height: 400px;
  margin-right: 20px;
`;

export const MovieDetailsImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MovieDetailsInfo = styled.div`
  padding: 10px;
`;

export const MovieDetailsInfoAdditional = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  & a {
    color: blue;
    text-decoration: underline;
  }
`;

export const MovieDetailsInfoSpan = styled.span`
  display: flex;
  align-items: center;
  width: 5px;
  height: 5px;
  border: 1px solid #000;
  background-color: red;
  margin-right: 5px;

  border-radius: 50%;
  border: none;
`;

export const MovieDetailsInfoList = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
