import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  height: 60px;
  justify-content: center;
  position: relative;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    left: 15px;
    position: absolute;
    top: 10px;
  }

  img {
    max-height: 250%;
    width: auto;
  }
`;
