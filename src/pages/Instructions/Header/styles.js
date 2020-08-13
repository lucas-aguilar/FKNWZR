import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  p,
  span {
    font-family: ${(props) => props.theme.fonts.pixel};
    font-size: ${(props) => props.theme.fontSizes.medium};
    padding: 10px 30px;
    text-align: center;
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
  span {
    background-color: ${(props) => props.theme.colors.yellow};
    font-size: ${(props) => props.theme.fontSizes.large};
    width: 100%;
  }
`;
export const Title = styled.h1`
  background-color: ${(props) => props.theme.colors.yellow};
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 20px 0;
  padding: 10px 30px;
  text-align: center;
  width: 100%;
  strong {
    font-family: ${(props) => props.theme.fonts.pixel};
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;
