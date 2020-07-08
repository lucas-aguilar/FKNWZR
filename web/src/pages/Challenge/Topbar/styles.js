import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  height: 60px;
  justify-content: space-evenly;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;
export const QstCounter = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  border: 2px solid ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.midLarge};
  padding: 0 5px;
`;
export const TimeLeft = styled.div`
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.midLarge};
`;
