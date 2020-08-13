import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  font-family: ${(props) => props.theme.fonts.lightGray};
  height: 100vh;
  padding-top: 60px;
`;
