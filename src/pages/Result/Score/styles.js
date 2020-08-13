import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.yellow};
  display: flex;
  height: 80px;
  justify-content: center;
  width: 100%;

  span {
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.pixel};
    font-size: ${(props) => props.theme.fontSizes.midLarge};
  }
`;

export const Points = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-left: 30px;
`;
