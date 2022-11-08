import styled from 'styled-components';

export const MenuBlock = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 0 10px 20px;

  & a {
    margin-right: 20px;
    font-size: 24px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
