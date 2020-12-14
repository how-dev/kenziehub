import FormSignUp from "../../components/form/formSignUp/index";
import signUpLogo from "../../img/signUpLogo.svg";
import styled from "styled-components";

const SignUp = () => {
  return (
    <StyledContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <h1>KENZIE HUB</h1>
        <img alt="signUpLogo" src={signUpLogo} style={{ width: "400px" }} />
      </div>
      <FormContainer>
        <FormSignUp />
      </FormContainer>
    </StyledContainer>
  );
};

export default SignUp;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 700px;
  img {
    width: 30vw;
  }
`;

const FormContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10vh;
  height: 95vh;
  background-color: #f2cc8f;
  margin-bottom: -150px;
  overflow: hidden;

  .signInButton {
    width: 15vw;
    height: 5vh;
    background-color: #e07a5f;
  }
`;
