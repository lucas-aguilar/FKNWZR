import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 20px 0;
  text-align: center;
  strong {
    font-family: ${(props) => props.theme.fonts.pixel};
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;
export const InviteBtn = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 10px 0 25px 0;
  text-decoration: underline;
  transition: 120ms ease color;

  &:hover {
    color: ${(props) => props.theme.colors.purple};
  }
`;
