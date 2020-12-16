import { useState, useEffect } from "react";
import FormSignUp from "../../components/form/formSignUp/index";
import signUpLogo from "../../img/signUpLogo.svg";
import { StyledContainer, FormContainer } from "./style.js";
import { motion } from "framer-motion";

const SignUp = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = async () => {
      setWidth(await window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <StyledContainer>
          {width > 800 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <h1 style={{ fontWeight: "200", letterSpacing: "5px" }}>
                KENZIE HUB
              </h1>
              <img
                alt="signUpLogo"
                src={signUpLogo}
                style={{ width: "400px" }}
              />
            </div>
          )}
          <motion.div
            initial={{ marginLeft: 500 }}
            animate={{ marginLeft: 0 }}
            exit={{ marginLeft: 0 }}
            transition={{ duration: 3 }}
          >
            <FormContainer>
              <FormSignUp />
            </FormContainer>
          </motion.div>
        </StyledContainer>
      </motion.div>
    );
};

export default SignUp;
