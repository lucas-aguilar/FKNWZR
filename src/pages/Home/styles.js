import styled from "styled-components";

export const Main = styled.div`
  background-color: ${(props) => props.theme.colors.purple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 60vh;
`;
export const MainHeading = styled.h1`
  color: ${(props) => props.theme.colors.yellow};
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 0;
  margin-bottom: 50px;
  padding: 30px;
  text-align: center;
`;
export const SecondHeading = styled.h2`
  color: ${(props) => props.theme.colors.yellow};
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.large};
  margin: 0 50px;
  padding: 30px 0;
  text-align: center;
`;
export const PlayAnon = styled.button`
  align-self: center;
  background-color: unset;
  border: none;
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.small};
  max-width: 300px;
  text-decoration: underline;
  transition: 200ms ease all;
  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`;
