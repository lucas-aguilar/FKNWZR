import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.position === 1 ? props.theme.colors.orange : props.theme.colors.blue};
  display: flex;
  justify-content: space-between;
  margin: 0 0 5px 0;
  max-width: 380px;
  padding: 0 20px;
  width: 100%;

  img {
    height: 30px;
  }
`;
export const Pos = styled.div`
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.large};
  width: 15%;
`;
export const NameBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: start;
  padding: 0 5px;
  width: 70%;
`;
export const Name = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: bold;
  margin-left: 15px;
`;
export const Score = styled.div`
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.large};
  width: 15%;
`;
