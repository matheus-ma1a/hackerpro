import React from 'react';
import styled from 'styled-components';


const OuterProgressBar = styled.section`
  width: 100%;
  background-color: #F25252;
  border-radius: 10px;

`;

const InnerProgressBar = styled.section`
  width: ${props => props.progress}%;
  height: 16px;
  background-color: ${props => {
    if (props.progress >= 0 && props.progress <= 30) {
      return '#00BA75'; // 0% a 30% - vermelho
    } else if (props.progress > 30 && props.progress <= 50) {
      return '#00BA75'; // 31% a 50% - amarelo
    } else {
      return '#00BA75'; // Restante - verde
    }
  }};
  border-radius: 10px;
  transition: width 0.5s;
  display: flex;
  justify-content: end;
  align-items: center;
  color: #ffffff;
  font-size: small;
  font-weight: regular;
  padding-right: 5px;
`;


const ProgressBar = ({ progress }) => {
  return (
    <OuterProgressBar>
      <InnerProgressBar progress={progress}>
        {progress}%
      </InnerProgressBar>
    </OuterProgressBar>
  );
};

export default ProgressBar;
