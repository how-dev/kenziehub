import { Button, TextField, makeStyles, Typography } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { passwordSchema } from "../../../helper";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "40vw",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  input: {
    width: "35vw",
    margin: "auto",
    marginBottom: "1vh",
  },
  subTitle: {
    color: "#3D405B",
    marginLeft: "3vw",
    marginBottom: "1vh",
  },
  button: {
    marginTop: "2vh",
    marginBottom: "8vh",
  },
}));

const FormPasswordUpdate = () => {
  const classes = useStyles();
  const token = useSelector((state) => state.key);

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
      .then((res) => console.log(res));
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
      <Button type="submit" className={classes.button} color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default FormPasswordUpdate;
