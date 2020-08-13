import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 0;
`;

export const TimeBonus = styled.div`
  max-width: 380px;
  padding: 5px 0;
  width: 100%;
  b {
    font-size: ${(props) => props.theme.fontSizes.midSmall};
    font-family: ${(props) => props.theme.fonts.pixel};
    text-align: left;
  }
`;
