import FormSignUp from "../../components/form/formSignUp/index";
import { useHistory } from "react-router-dom";
import signUpLogo from "../../img/signUpLogo.svg";
import styled from "styled-components";

const SignUp = () => {
  const history = useHistory();
  return (
    <StyledContainer>
      <div className="title">
        <h1>KENZIE HUB</h1>
        <img alt="signUpLogo" src={signUpLogo} />
      </div>
      <FormContainer>
        <FormSignUp />
        <button className="signInButton" onClick={() => history.push("/login")}>
          Already have an account? Sign in
        </button>
      </FormContainer>
    </StyledContainer>
  );
};

export default SignUp;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 30vw;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25vw;
  height: 99vh;
  background-color: #f2cc8f;
  padding-left: 230px;
  position: relative;
  margin-bottom: -150px;

  .signInButton {
    width: 15vw;
    height: 5vh;
    background-color: #e07a5f;
  }
`;
