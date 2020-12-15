import { useState, useEffect } from "react"

import FormSignUp from "../../components/form/formSignUp/index";
import signUpLogo from "../../img/signUpLogo.svg";
import styled from "styled-components";

const SignUp = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
    }, [width]);



  return (
    <StyledContainer>
      {width > 800 && 
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h1>KENZIE HUB</h1>
        <img alt="signUpLogo" src={signUpLogo} style={{ width: "400px" }} />
      </div>}
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
<<<<<<< HEAD
  padding-bottom: 5%;
  height: 100%;
=======
  padding-bottom: 10vh;
  height: 85vh;
>>>>>>> Develop
  background-color: #f2cc8f;
  margin-bottom: -150px;
  overflow: hidden;
<<<<<<< HEAD
  /* transform: translateY(10%); */
=======
  @media (max-width: 800px) {
    width: 100vw;
  }
>>>>>>> Develop

  .signInButton {
    width: 15vw;
    height: 5vh;
    background-color: #e07a5f;
  }
`;
