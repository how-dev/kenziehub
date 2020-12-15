import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { settingsSchema } from "../../../helper";
import { useState } from "react";
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

const FormUpdateProfile = () => {
  const classes = useStyles();

  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.key);

  const [module, setModule] = useState("");
  const [moduleRegister, setModuleRegister] = useState({});
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(user);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(settingsSchema),
  });

  const handleModuleChange = (event) => {
    setModuleRegister({ course_module: event.target.value });
    register(moduleRegister.course_module);
    setModule(event.target.value);
  };

  const handleProfileUpdate = (data) => {
    data.course_module = module;
    console.log(data);
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
    <form onSubmit={handleSubmit(handleProfileUpdate)} className={classes.form}>
      <Typography className={classes.subTitle}>Alterar dados</Typography>
      <TextField
        className={classes.input}
        id="outlined-basic"
        label="nome"
        name="name"
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        className={classes.input}
        id="outlined-basic"
        label="email"
        name="email"
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <InputLabel
        id="demo-simple-select-outlined-label"
        className={classes.input}
      >
        Selecione o seu módulo:
      </InputLabel>
      <Select
        className={classes.input}
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        onChange={handleModuleChange}
        value={module}
        fullWidth
        style={{ background: "#F4F1DE", borderRadius: "4px" }}
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
      <TextField
        className={classes.input}
        id="outlined-basic"
        label="biografia"
        name="bio"
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errors.bio}
        helperText={errors.bio?.message}
      />
      <TextField
        className={classes.input}
        id="outlined-basic"
        label="contato"
        name="contact"
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errors.contact}
        helperText={errors.contact?.message}
      />
      <Button type="submit" className={classes.button} color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default FormUpdateProfile;
