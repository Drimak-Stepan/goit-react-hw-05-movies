import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;
`;

export const Author = styled.h3`
  padding: 4px;
  margin-top: 10px;
  margin-bottom: 0;
  color: black;
`;
