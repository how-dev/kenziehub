import {
  Button,
  TextField,
  makeStyles,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { passwordSchema } from "../../../helper";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    textAlign: "center",
  },
  input: {
    width: "35vw",
    minWidth: "250px",
    margin: "auto",
    marginBottom: "1vh",
  },
  subTitle: {
    color: "#3D405B",
    marginBottom: "1vh",
  },
  button: {
    marginTop: "2vh",
    marginBottom: "8vh",
    margin: "auto",
    width: "35vw",
    backgroundColor: "#81B29A",
    "&:hover": {
      color: "#F2CC8F",
      backgroundColor: "#3D405B",
    },
    [theme.breakpoints.down(400)]: {
      width: "250px",
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FormPasswordUpdate = () => {
  const classes = useStyles();
  const token = useSelector((state) => state.key);
  const [positiveFeedback, setPositiveFeedback] = useState(false);
  const [negativeFeedback, setNegativeFeedback] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const handlePasswordUpdate = (data) => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .put("https://kenziehub.me/profile", data, headers)
      .then((res) => {
        setPositiveFeedback(true);
      })
      .catch((error) => {
        setNegativeFeedback(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPositiveFeedback(false);
    setNegativeFeedback(false);
  };

  return (
    <form
      onSubmit={handleSubmit(handlePasswordUpdate)}
      className={classes.form}
    >
      <Typography className={classes.subTitle}>Alterar senha</Typography>
      <TextField
        className={classes.input}
        id="new-password"
        label="nova senha"
        name="password"
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        className={classes.input}
        id="old-password"
        label="senha antiga"
        name="old_password"
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errors.old_password}
        helperText={errors.old_password?.message}
      />
      <Snackbar
        open={Boolean(negativeFeedback)}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Dados incorretos!
        </Alert>
      </Snackbar>
      <Snackbar
        open={Boolean(positiveFeedback)}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Senha alterada!
        </Alert>
      </Snackbar>
      <Button type="submit" className={classes.button} color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default FormPasswordUpdate;
