import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 0 10px 10px 10px;
  > div {
    display: flex;
  }
  > h2 {
    margin-bottom: 10px;
  }
`;
export const Btn = styled.button`
  display: inline-block;
  padding: 10px;
  margin: 0 0 10px 10px;
  border-radius: 4px;
  font: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: #3f51b5;
  color: #fff;
  border: 0;

  :hover,
  :focus {
    background-color: orangered;
  }
`;

export const Imges = styled.div`
  margin: 0 10px 0 0;
  flex-basis: 300px;
  > img {
    max-width: 300px;
    height: auto;
  }
`;
export const Description = styled.div`
  margin-left: 0;
  flex-basis: 1100px;
`;
