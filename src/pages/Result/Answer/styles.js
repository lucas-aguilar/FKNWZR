import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  border-left: 8px solid
    ${(props) =>
      props.isCorrect ? props.theme.colors.green : props.theme.colors.red};
  box-shadow: 2px 2px 3px 0px ${(props) => props.theme.colors.shadow};
  margin: 10px 5px 0 5px;
  max-width: 380px;
`;

export const Header = styled.div`
  display: flex;
`;
export const QuestionText = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontSizes.midLarge};
  font-weight: bold;
  line-height: 30px;
  padding: 10px;
`;

export const QuestionLinks = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => props.theme.fontSizes.midSmall};
  font-weight: bold;
  float: right;
  margin-right: 15px;
  margin-bottom: 5px;
  text-decoration: underline;
`;

export const Status = styled.div`
  background-color: ${(props) =>
    props.isTrue ? props.theme.colors.white : props.theme.colors.black};
  color: ${(props) =>
    props.isTrue ? props.theme.colors.black : props.theme.colors.white};
  border: ${(props) =>
    props.isTrue ? "1px solid " + props.theme.colors.black : "none"};
  display: flex;
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: 0 10px;
`;

export const Response = styled.div`
align-items: center;
background-color: ${(props) =>
  props.isCorrect ? props.theme.colors.green : props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column
  flex-grow: 1;
  font-family: ${(props) => props.theme.fonts.pixel};
  font-size: ${(props) => props.theme.fontSizes.medium};
  position: relative;
  text-align: right;
  width: 100%;
  padding-left: 20px;
  
  span {
    font-family: ${(props) => props.theme.fonts.pixel};
    position: absolute;
    right: 5px;
    top: 0;
  }
  `;

export const SourceLink = styled.span`
  word-break: break-all;
`;
