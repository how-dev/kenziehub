import styled from "styled-components";

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
