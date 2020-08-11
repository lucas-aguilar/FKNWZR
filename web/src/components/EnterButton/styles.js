import styled from 'styled-components';

export const Btn = styled.button`
  align-self: center;
  background-color: ${(props) => props.theme.colors.blue};
  border: 4px solid ${(props) => props.theme.colors.black};
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.midLarge};
  margin: 15px;
  margin-top: 40px;
  padding: 20px 35px;
  position: relative;
  text-align: center;
  transition: 200ms ease all;
  width: 300px;

  &:hover {
    background-color: ${(props) => props.theme.colors.orange};
  }

  img {
    left: 25px;
    top: 9px;
    position: absolute;
    max-height: 45px;
  }
`;
