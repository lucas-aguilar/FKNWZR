import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: row;
  font-family: ${(props) => props.theme.fonts.pixel};
  justify-content: center;
  padding: 15px 0;

  span {
    align-items: center;
    display: flex;
    font-family: ${(props) => props.theme.fonts.pixel};
    font-size: ${(props) => props.theme.fontSizes.large};
    height: 72px;
    padding-right: 25px;
    text-align: left;
  }

  strong {
    color: ${(props) => props.theme.colors.red};
    font-family: ${(props) => props.theme.fonts.pixel};
    font-size: ${(props) => props.theme.fontSizes.xl};
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: 35px;
    transition: 200ms ease all;

    &:hover {
      color: ${(props) => props.theme.colors.purple};
    }
  }
`;
