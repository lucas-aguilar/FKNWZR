import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  flex-direction: column;
`;
