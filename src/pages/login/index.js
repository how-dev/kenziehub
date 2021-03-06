import { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import axios from "axios";

import { FormContainer, Form } from "./style";

import { getTokenThunk } from "../../store/modules/token/thunk";
import { loginThunk } from "../../store/modules/user/thunk";
import LoginLogo from "../../img/user_group_1.svg";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const {
    register,
    unregister,
    setValue,
    errors,
    handleSubmit,
    setError,
  } = useForm();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    register("email", { required: "O campo de email não pode estar vazio" });
    register("password", { required: "O campo de senha não pode estar vazio" });

    return () => {
      unregister("email");
      unregister("password");
      window.removeEventListener("resize", handleResize);
    };
  }, [register, unregister, width]);

  const tryLogin = (data) => {
    axios
      .post("https://kenziehub.me/sessions", { ...data })
      .then((res) => {
        dispatch(loginThunk(res.data.user));
        dispatch(getTokenThunk(res.data.token));
        history.push("/");
      })
      .catch(() =>
        setError("password", { message: "Email ou senha inválido" })
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <motion.div
          initial={{ marginRight: 500 }}
          animate={{ marginRight: 0 }}
          exit={{ marginRight: 0 }}
          transition={{ duration: 1 }}
          >
          <FormContainer>
            <form
              onSubmit={handleSubmit(tryLogin)}
              style={{ width: "60%" }}
              noValidate
              autoComplete="off"
              >
              <Form>
                <TextField
                  onChange={(e) => {
                    setValue("email", e.target.value);
                  }}
                  label="Email"
                  name="email"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                  error={!!errors.email}
                />
                <TextField
                  type="password"
                  onChange={(e) => {
                    setValue("password", e.target.value);
                  }}
                  label="Password"
                  name="password"
                  variant="outlined"
                  className="outlined-basic"
                  fullWidth
                  error={!!errors.password}
                />
                <p style={{ fontSize: "xx-small", color: "red" }}>
                  {errors.email?.message || errors.password?.message}
                </p>
                <Button
                  className="loginButton"
                  type="submit"
                  variant="contained"
                  color="primary"
                  >
                  Login
                </Button>
              </Form>
            </form>
            <Button
              className="signupButton"
              variant="contained"
              color="primary"
              onClick={() => {
                history.push("/sign-up");
              }}
              >
              Cadastre-se
            </Button>
          </FormContainer>
        </motion.div>
        {width > 800 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              textAlign: "center",
            }}
            >

            <h1 style={{ fontWeight: "200", letterSpacing: "5px" }}>
              KENZIE HUB
            </h1>

            <img alt="placeholder" src={LoginLogo} style={{ width: "60%" }} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Login;
