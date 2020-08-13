import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
export const QuestionContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 2px 2px 3px 0px #787878;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.midLarge};
  font-weight: bold;
  line-height: 30px;
  margin: 0 30px;
  padding: 10px;
`;
export const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 30px;
  width: 100%;
  button {
    padding: 10px 15px;
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: bold;
    text-transform: uppercase;
  }
`;
