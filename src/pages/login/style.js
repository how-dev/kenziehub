import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75vh;
  overflow: hidden;
  h1 {
    margin-right: 15%;
  }
  img {
    width: 30vw;
    margin-right: 15%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 40vw;
  height: 88vh;
  background-color: #f2cc8f;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 100vw;
  }

  #outlined-basic {
    background-color: #f4f1de;
    border-radius: 4px;
  }

  .loginButton {
    width: 15vw;
    height: 5vh;
    background-color: #e07a5f;
  }
  .signupButton {
    width: 150px;
    height: 5vh;
  }
`;

export const Form = styled.div`
  display: flex;
  height: 250px;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
