import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.yellow};
  display: flex;
  height: 200px;
  justify-content: center;
  padding: 0 50px;
  position: relative;
  text-align: center;
  width: 100%;

  span {
    font-family: ${(props) => props.theme.fonts.pixel};
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

export const BackButton = styled.button`
  color: ${(props) => props.theme.colors.yellow};
  left: 10px;
  padding: 5px;
  position: absolute;
  top: 10px;
  transition: 200ms ease all;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.purple};
  }

  span {
    display: block;
    float: right;
    font-family: ${(props) => props.theme.fonts.pixel};
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin: 3px 0 0 8px;
    text-decoration: underline;
  }
`;
