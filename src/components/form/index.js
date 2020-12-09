import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormData, theme, schema_Signup } from "../../helper";
import { useState } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

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

  const [modules, setModules] = useState({
    moduleOne: false,
    moduleTwo: false,
    moduleThree: false,
    moduleFour: false,
  });

  const { moduleOne, moduleTwo, moduleThree, moduleFour } = modules;

  const error =
    [moduleOne, moduleTwo, moduleThree, moduleFour].filter((v) => v).length !==
    1;
  const [moduleValue, setModuleValue] = useState("");
  const { register, handleSubmit, errors } = useForm({
    //resolver: yupResolver(schema_Signup),
  });

  const handleSignUp = async (data) => {
    //colocar thunk para passar o objeto do form
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
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                //required
                fullWidth
                id="email"
                label="Endereço de E-mail"
                name="email"
                autoComplete="email"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                //required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                inputRef={register}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                //required
                fullWidth
                id="Name"
                inputRef={register}
                label="Nome Completo"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                //required
                fullWidth
                id="bio"
                inputRef={register}
                label="Descrição breve"
                name="bio"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl required error={error} component="fieldset">
                <FormLabel component="legend">Selecione seu Quarter</FormLabel>
                <TextField
                  variant="outlined"
                  //required
                  disabled={true}
                  id="module"
                  value={moduleValue}
                  inputRef={register}
                  name="module"
                />
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
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
                        checked={moduleFour}
                        onChange={handleChange}
                        name="moduleFour"
                        value="Quarto módulo (Backend Avançado)"
                      />
                    }
                    label="Quarto módulo (Backend Avançado)"
                  />
                  <FormHelperText>Selecione uma opção</FormHelperText>
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item xs={12}>
              <Link href="#" variant="paginadologin">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
