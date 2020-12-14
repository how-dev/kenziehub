import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75vh;
  overflow: hidden;
  h1{
    margin-right: 15%
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
  width: 500px;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  background-color: #f2cc8f;
  margin-bottom: -150px;
  overflow: hidden;

  #outlined-basic{
    background-color: #f4f1de;
    border-radius: 5px;
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
  display:flex;
  height: 250px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
`;
