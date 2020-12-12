import styled, { css } from "styled-components";
import { Paper } from "@material-ui/core";

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

export const StyledPaper = styled(Paper)`
  width: 50vw;
  border-radius: 8%;
  display: flex;
  flex-direction: column;
  ${({ height }) => css`
    height: ${height}vh;
  `}
  ${({ width }) => css`
    width: ${width}vw;
  `}
`;

export const StyledError = styled.p`
  color: red;
  font-size: x-small;
`;
