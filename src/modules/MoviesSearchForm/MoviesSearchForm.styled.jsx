import styled from '@emotion/styled';

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  margin: 10px 10px 0 0;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  font: inherit;
  outline-color: orangered;
`;
export const Btn = styled.button`
  display: inline-block;
  padding: 10px;
  margin-left: 10px;
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
