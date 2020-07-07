import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.yellow};
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: center;
  position: relative;
  width: 100%;

  img {
    height: auto;
    max-width: 100%;
    max-height: 100%;
    width: auto;
  }
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.pixel};
  margin-top: -90px;
  text-align: center;
`;
