import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90vh;
  img {
    width: 30vw;
  }
`;

export const FormContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
  height: 100vh;
  background-color: #f2cc8f;
  margin-bottom: -150px;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 100vw;
  }

  .signInButton {
    width: 15vw;
    height: 5vh;
    background-color: #e07a5f;
  }
`;