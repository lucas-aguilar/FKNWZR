import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.yellow};
  cursor: pointer;
  border: 7px solid ${(props) => props.theme.colors.orange};
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.large};
  margin: 15px 50px;
  margin-top: 80px;
  padding: 30px;
  text-align: center;
  transition: 200ms ease all;

  &:hover {
    background-color: ${(props) => props.theme.colors.yellow};
    border-color: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.purple};
  }
`;
