import { StyledContainer, FormContainer, Form } from "./style";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addAutoFillEmail, addAutoFillPswd} from "../../store/modules/autoFill/actions"
import { useForm } from "react-hook-form";
import { loginThunk } from "../../store/modules/user/thunk";
import { getTokenThunk } from "../../store/modules/token/thunk";
import LoginLogo from "../../img/user_group_1.svg"

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const autoFillPswd = useSelector(state => state.autoFillPswd)
  const autoFillEmail = useSelector(state => state.autoFillEmail)
  const {
    register,
    unregister,
    setValue,
    errors,
    handleSubmit,
    setError
  } = useForm();

  useEffect(() => {
    register("email", { required: "O campo de email não pode estar vazio" });
    register("password", { required: "O campo de senha não pode estar vazio" });

    return () => {
      unregister("email");
      unregister("password");
    };
  }, [register, unregister]);

  const tryLogin = (data) => {
    console.log(data);
    axios
      .post("https://kenziehub.me/sessions", { ...data })
      .then((res) => {
        dispatch(loginThunk(res.data.user));
        dispatch(getTokenThunk(res.data.token));
        history.push("/");
      })
      .catch((err) =>
        setError("password", { message: "Email ou senha inválido" })
      );
  };

  return (
    <StyledContainer>
      <FormContainer>
        <form  onSubmit={handleSubmit(tryLogin)} noValidate autoComplete="off">
          <Form>
          <TextField
            value={autoFillEmail}
            onChange={(e) => {
              dispatch(addAutoFillEmail(e.target.value))
              setValue("email", e.target.value)
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            value={autoFillPswd}
            type="password"
            onChange={(e) => {
              dispatch(addAutoFillPswd(e.target.value))
              setValue("password", e.target.value)
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <Button className="loginButton" type="submit" variant="contained" color="primary">
            Login
          </Button>
          {errors.email && <p>{errors.email.message}</p>}
          {errors.password && <p>{errors.password.message}</p>}
          </Form>
        </form>
        <Button className="signupButton" variant="contained" color="primary" onClick={() => {
          // dispatch(addAutoFill(email))
          // dispatch(addAutoFill(password))
          history.push("/sign-up")
          }}>
            Cadastre-se
          </Button>
      </FormContainer>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center",justifyContent:"center", width: "100%", textAlign: "center"}}>
      <h1>KENZIE HUB</h1>
      <img
        alt="placeholder"
        src={LoginLogo}
      />
      </div>
    </StyledContainer>
  );
};

export default Login;


