import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: none;
  width: 298px;
  height: 197px;
  display: flex;
  flex: 0 0 298px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  color: black;
  text-decoration: none;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  align-items: flex-end;
  border-radius: 10px;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
