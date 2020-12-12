import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
  FormLabel,
  FormGroup,
  FormHelperText,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../../helper";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import { signUpRequest } from "../../../requests/";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const history = useHistory();

  const [modules, setModules] = useState({
    moduleOne: false,
    moduleTwo: false,
    moduleThree: false,
    moduleFour: false,
  });

  const [response, setResponse] = useState("");

  const [responseError, setError] = useState("");

  const { moduleOne, moduleTwo, moduleThree, moduleFour } = modules;

  const error =
    [moduleOne, moduleTwo, moduleThree, moduleFour].filter((v) => v).length !==
    1;

  const [moduleValue, setModuleValue] = useState("");

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = (data) => {
    data.course_module = moduleValue;
    signUpRequest(data, setResponse, setError);
  };

  const handleChange = (event) => {
    setModules({ [event.target.name]: event.target.checked });
    register({ modules: event.target.value });
    setModuleValue(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Endereço de E-mail"
                name="email"
                autoComplete="email"
                inputRef={register}
              />
              <FormHelperText error={errors}>
                {errors.email?.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                inputRef={register}
                autoComplete="current-password"
              />
              <FormHelperText error={errors}>
                {errors.password?.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                fullWidth
                id="name"
                inputRef={register}
                label="Nome Completo"
              />
              <FormHelperText error={errors}>
                {errors.name?.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="bio"
                inputRef={register}
                label="Descrição breve"
                name="bio"
              />
              <FormHelperText error={errors}>
                {errors.bio?.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="contact"
                inputRef={register}
                label="Contato"
                name="contact"
              />
              <FormHelperText error={errors}>
                {errors.contact?.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <FormControl required error={error} component="fieldset">
                <FormLabel component="legend">Selecione seu Quarter</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="module"
                        checked={moduleOne}
                        onChange={handleChange}
                        name="moduleOne"
                        value="Primeiro módulo (Introdução ao Frontend)"
                      />
                    }
                    label="Primeiro módulo (Introdução ao Frontend)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="module"
                        checked={moduleTwo}
                        onChange={handleChange}
                        name="moduleTwo"
                        value="Segundo módulo (Frontend Avançado)"
                      />
                    }
                    label="Segundo módulo (Frontend Avançado)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="module"
                        checked={moduleThree}
                        onChange={handleChange}
                        name="moduleThree"
                        value="Terceiro módulo (Introdução ao Backend)"
                      />
                    }
                    label="Terceiro módulo (Introdução ao Backend)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="module"
                        checked={moduleFour}
                        onChange={handleChange}
                        name="moduleFour"
                        value="Quarto módulo (Backend Avançado)"
                      />
                    }
                    label="Quarto módulo (Backend Avançado)"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
