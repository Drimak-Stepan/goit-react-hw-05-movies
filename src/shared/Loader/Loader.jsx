import { BallTriangle } from 'react-loader-spinner';
import styled from '@emotion/styled';

export const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  );
};

export const Block = styled.div`
  margin-top: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
