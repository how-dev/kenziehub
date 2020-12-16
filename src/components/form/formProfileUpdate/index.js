import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  makeStyles,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { settingsSchema } from "../../../helper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../store/modules/user/thunk";
import axios from "axios";

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
    marginBottom: "3vh",
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

const FormUpdateProfile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.key);
  const [module, setModule] = useState("");
  const [moduleRegister, setModuleRegister] = useState({});
  const [positiveFeedback, setPositiveFeedback] = useState(false);

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
    if (data.name === "") {
      data.name = user.name;
    }
    if (data.email === "") {
      data.email = user.email;
    }
    if (data.contact === "") {
      data.contact = user.contact;
    }
    if (data.bio === "") {
      data.bio = user.bio;
    }
    if (data.course_module === "") {
      data.course_module = user.course_module;
    }
    console.log(data);
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.put("https://kenziehub.me/profile", data, headers).then((res) => {
      axios.get(`https://kenziehub.me/users/${user.id}`).then((res) => {
        dispatch(loginThunk(res.data));
        setPositiveFeedback(true);
      });
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPositiveFeedback(false);
  };

  return (
    <form onSubmit={handleSubmit(handleProfileUpdate)} className={classes.form}>
      <Typography className={classes.subTitle}>Alterar perfil</Typography>
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
        style={{ borderRadius: "4px" }}
        variant="outlined"
        margin="dense"
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
      <Snackbar
        open={Boolean(positiveFeedback)}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Dados alterados!
        </Alert>
      </Snackbar>
      <Button type="submit" className={classes.button}>
        Enviar
      </Button>
    </form>
  );
};

export default FormUpdateProfile;
