import {
  FormControl,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { signUpSchema } from "../../../helper";
import { signUpRequest } from "../../../requests/";
import { yupResolver } from "@hookform/resolvers/yup";
import { withStyles } from "@material-ui/core/styles";
import {addAutoFillEmail, addAutoFillPswd} from "../../../store/modules/autoFill/actions"

const LoginButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 13,
    padding: "1.5em",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#E07A5F",
    borderColor: "#E07A5F",
    height: 25,
    color: "white",
    textTransform: "uppercase",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#D27860",
      borderColor: "#E07A5F",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#E07A5F",
      borderColor: "#E07A5F"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #F3967E"
    }
  }
})(Button);
const SignUpButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 13,
    padding: "1.5em",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#3d405b",
    borderColor: "#3d405b",
    height: 25,
    color: "white",
    textTransform: "uppercase",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#22243c",
      borderColor: "#22243c",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#22243c",
      borderColor: "#333556"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #333556"
    }
  }
})(Button);

const FormSignUp = () => {
  const dispatch = useDispatch()
  const autoFillEmail = useSelector((state) => state.autoFillEmail)
  const autoFillPswd = useSelector((state) => state.autoFillPswd)
  const history = useHistory();

  const [, setResponse] = useState("");
  const [responseError, setResponseError] = useState("");
  const [module, setModule] = useState("");
  const [moduleRegister, setModuleRegister] = useState({});

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const handleSignUp = (data) => {
    data.course_module = module;
    if (module) {
      signUpRequest(data, setResponse, setResponseError);
      history.push("/login");
      console.log(data);
    }
  };

  const handleChange = (event) => {
    setModuleRegister({ course_module: event.target.value });
    register(moduleRegister.course_module);
    setModule(event.target.value);
  };

  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <form
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around"
        }}
        onSubmit={handleSubmit(handleSignUp)}
      >
        {responseError}
        <TextField
          id="outlined-basic"
          label="Nome"
          name="name"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name?.message}
          size="small"
          fullWidth
          inputRef={register}
          style={{ background: "#F4F1DE", borderRadius: "4px" }}
        />
        <TextField
          onChange={(e) => dispatch(addAutoFillEmail(e.target.value))}
          value={autoFillEmail}
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          size="small"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
          inputRef={register}
          style={{ background: "#F4F1DE", borderRadius: "4px" }}
        />
        <TextField
          onChange={(e) => dispatch(addAutoFillPswd(e.target.value))}
          value={autoFillPswd}
          id="outlined-basic"
          label="Senha"
          type="password"
          name="password"
          variant="outlined"
          size="small"
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
          inputRef={register}
          style={{ background: "#F4F1DE", borderRadius: "4px" }}
        />
        <TextField
          id="outlined-basic"
          label="Sobre você"
          name="bio"
          variant="outlined"
          size="small"
          fullWidth
          error={!!errors.bio}
          helperText={errors.bio?.message}
          inputRef={register}
          style={{ background: "#F4F1DE", borderRadius: "4px" }}
        />
        <TextField
          id="outlined-basic"
          label="Contato"
          name="contact"
          variant="outlined"
          size="small"
          fullWidth
          error={!!errors.contact}
          helperText={errors.contact?.message}
          inputRef={register}
          style={{ background: "#F4F1DE", borderRadius: "4px" }}
        />
        <FormControl
          variant="outlined"
          fullWidth
          style={{ background: "#F4F1DE", borderRadius: "4px" }}
        >
          <InputLabel id="module-select-label">
            Selecione o seu módulo
          </InputLabel>
          <Select
            labelId="module-select-label"
            id="madule-select"
            onChange={handleChange}
            value={module}
            style={{ borderRadius: "4px" }}
            label="Selecione o seu módulo"
          >
            <MenuItem value={"Primeiro módulo (Introdução ao Frontend)"}>
              Primeiro módulo (Introdução ao Frontend)
            </MenuItem>
            <MenuItem value={"Segundo módulo (Frontend Avançado)"}>
              Segundo módulo (Frontend Avançado)
            </MenuItem>
            <MenuItem value={"Terceiro módulo (Introdução ao Backend)"}>
              Terceiro módulo (Introdução ao Backend)
            </MenuItem>
            <MenuItem value={"Quarto módulo (Backend Avançado)"}>
              Quarto módulo (Backend Avançado)
            </MenuItem>
          </Select>
        </FormControl>
        <SignUpButton type="submit">Cadastrar</SignUpButton>
        <LoginButton onClick={() => history.push("/login")}>
          Já tem uma conta? Faça o Login
        </LoginButton>
        
      </form>
    </div>
  );
};

export default FormSignUp;
