import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 1;
  margin-bottom: 16px;
  margin-left: 3%;
  display: inline-block;
  padding: 10px;
  line-height: 1;
  border: 1px solid;
  border-color: black;
  background: white;
  border-radius: 25px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;
  overflow-x: auto;
  padding-left: 5%;
  padding-bottom: 32px;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: tomato;
  margin-left: 0;
  min-height: 197px;
  background: white;
  padding-top: 0px;
  margin-bottom: 0px;
`;
