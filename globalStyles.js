import { Paper, InputLabel, Input, Button } from "@material-ui/core";
import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  overflow: hidden;
  opacity: 0;
  ${({ activate }) =>
    activate &&
    css`
      transition: 2s;
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
    `};
  ${({ height }) => css`
    height: ${height}vh;
  `}
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25vw;
  border-radius: 20px;
  transition: 2s;
  margin: 0;
  ${({ height }) => css`
    height: ${height}vh;
  `}
  ${({ mobile }) =>
    mobile &&
    css`
      @media screen and (max-width: 800px) {
        margin-right: 30px;
      }
    `}
  @media screen and (max-width: 800px) {
    position: absolute;
    opacity: 80%;
    background-color: transparent;
    width: 70vw;
    bottom: 46vh;
    right: 5vw;
    z-index: 1;
    border: none;
    box-shadow: none;
  }
  ${({ signup }) =>
    signup &&
    css`
      @media screen and (max-width: 800px) {
        position: absolute;
        bottom: -2vh;
        left: 5vw;
      }
    `}
  @media screen and (max-width: 1024px) {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  margin-top: 10px;
`;

export const StyledInput = styled(Input)`
  margin: 2%;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 30%;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  ${({ height, width }) => css`
    height: ${height}vh;
    width: ${width}vw;
  `}
  @media screen and (max-width: 800px) {
    height: 4vh;
    width: 20vw;
  }
`;

export const IconContainer = styled.div`
  width: 50%;
  overflow: hidden;
  ${({ home }) =>
    home &&
    css`
      margin: 0 auto;
      height: 80vh;
      margin-top: 5%;
    `}
  svg {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    width: 85%;
    height: 85vh;
    position: relative;
    top: 20vh;
    z-index: 0;
  }
  ${({ signup }) =>
    signup &&
    css`
      @media screen and (max-width: 800px) {
        top: -30vh;
        left: 5vw;
        width: 80%;
      }
    `}
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 30px;
  margin-left: 175px;
  @media screen and (max-width: 800px) {
    width: 80vw;
    margin: 0 auto;
    padding: 0;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80vw;
  margin-left: 15vw;
  @media screen and (max-width: 800px) {
    margin-left: 10vw;
    flex-direction: column;
    align-items: center;
  }
`;

export const SlideGuide = styled.p`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    font-weight: bold;
  }
`;

export const StyledErrors = styled.p`
  color: red;
  font-size: x-small;
`;
