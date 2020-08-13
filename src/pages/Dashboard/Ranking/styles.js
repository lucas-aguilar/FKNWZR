import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin: 15px 0;
    font-family: ${(props) => props.theme.fonts.pixel};
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

export const ButtonGroupContainer = styled.div`
  margin-bottom: 15px;
`;
