import { Typography, TextField, Button, makeStyles } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { techsSchema } from "../../../helper";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
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

const FormTechsUpdate = () => {
  const classes = useStyles();
  const token = useSelector((state) => state.key);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(techsSchema),
  });

  const handleTechsUpdate = (data) => {
    console.log(token);
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post("https://kenziehub.me/users/techs", data, headers)
      .then((res) => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit(handleTechsUpdate)} className={classes.form}>
      <Typography className={classes.subTitle}>Nova Tecnologia</Typography>
      <TextField
        className={classes.input}
        id="outlined-basic"
        label="título"
        name="title"
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <TextField
        className={classes.input}
        id="outlined-basic"
        label="status"
        name="status"
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errors.status}
        helperText={errors.status?.message}
      />
      <Button type="submit" className={classes.button} color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default FormTechsUpdate;
