import {
  Button,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signUpSchema } from "../../../helper";
import { signUpRequest } from "../../../requests/";
import { StyledPaper, StyledError } from "../../../globalStyles";
import { yupResolver } from "@hookform/resolvers/yup";

const FormSignUp = () => {
  const history = useHistory();

  const [response, setResponse] = useState("");
  const [responseError, setResponseError] = useState("");
  const [module, setModule] = useState("");
  const [moduleRegister, setModuleRegister] = useState({});

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = (data) => {
    data.course_module = module;
    // signUpRequest(data, setResponse, setResponseError);
    // history.push("/login");
    console.log(data);
  };

  const handleChange = (event) => {
    setModuleRegister({ course_module: event.target.value });
    register(moduleRegister.course_module);
    setModule(event.target.value);
  };

  return (
    <StyledPaper width="16">
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <TextField
          id="outlined-basic"
          label="name"
          name="name"
          variant="outlined"
          size="small"
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="email"
          name="email"
          variant="outlined"
          size="small"
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="password"
          name="password"
          variant="outlined"
          size="small"
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="bio"
          name="bio"
          variant="outlined"
          size="small"
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="contact"
          name="contact"
          variant="outlined"
          size="small"
          inputRef={register}
        />
        <InputLabel id="demo-simple-select-outlined-label">
          Selecione o seu módulo
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleChange}
          label="Selecione o seu módulo"
          value={module}
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
        <StyledError>
          {responseError && responseError}
          {errors.name?.message ||
            errors.email?.message ||
            errors.password?.message ||
            errors.bio?.message ||
            errors.contact?.message}
        </StyledError>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </StyledPaper>
  );
};

export default FormSignUp;
