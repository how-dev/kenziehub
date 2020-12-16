import { useState, useEffect } from "react"

import FormSignUp from "../../components/form/formSignUp/index";
import signUpLogo from "../../img/signUpLogo.svg";
import { StyledContainer, FormContainer } from "./style.js";

const SignUp = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    };
    // window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize) 
    }
  }, []);

  useEffect(() => {
    //logica
    return () => {
      // clean up
    }
  }, []) //array vazio

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

