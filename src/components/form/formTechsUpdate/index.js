import {
  Typography,
  TextField,
  Button,
  makeStyles,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { yupResolver } from "@hookform/resolvers/yup";
import { techsSchema } from "../../../helper";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
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
    margin: "auto",
    marginBottom: "1vh",
    [theme.breakpoints.down(400)]: {
      width: "250px",
    },
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

const FormTechsUpdate = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const token = useSelector((state) => state.key);
  const user = useSelector((state) => state.user);
  const [tech, setTech] = useState("");
  const [techStatus, setTechStatus] = useState("");
  const [attTech, setAttTech] = useState("");
  const [attTechStatus, setAttTechStatus] = useState("");
  const [error, setError] = useState(false);
  const [addTechFeedback, setAddTechFeedback] = useState(false);
  const [attTechFeedback, setAttTechFeedback] = useState(false);
  const [removeTechFeedback, setRemoveTechFeedback] = useState(false);

  const baseUrl = "https://kenziehub.me/";

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(techsSchema),
  });

  const handleTechsUpdate = (data) => {
    setError("");
    data.status = techStatus;
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(`${baseUrl}users/techs`, data, headers)
      .then((res) => {
        console.log(res);
        axios.get(`${baseUrl}users/${user.id}`).then((res) => {
          dispatch(loginThunk(res.data));
          setAttTechFeedback(false);
          setRemoveTechFeedback(false);
          setAddTechFeedback(true);
        });
      })
      .catch((err) => {
        console.log(err.response);
        setError(true);
      });
  };

  const handleRemoveTech = (e) => {
    e.preventDefault();
    if (tech) {
      const actualTech = user.techs.filter((actual) => actual.title === tech);
      const id = actualTech[0].id;
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios.delete(`${baseUrl}users/techs/${id}`, headers).then((res) => {
        axios.get(`${baseUrl}users/${user.id}`).then((res) => {
          dispatch(loginThunk(res.data));
          setAttTechFeedback(false);
          setAddTechFeedback(false);
          setRemoveTechFeedback(true);
        });
      });
    }
  };

  const handleUpdateTech = (e) => {
    e.preventDefault();
    if (attTech) {
      const data = {
        title: attTech,
        status: attTechStatus,
      };
      const actualTech = user.techs.filter(
        (actual) => actual.title === attTech
      );
      console.log(actualTech);
      const id = actualTech[0].id;
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios.put(`${baseUrl}users/techs/${id}`, data, headers).then((res) => {
        axios.get(`${baseUrl}users/${user.id}`).then((res) => {
          dispatch(loginThunk(res.data));
          setAddTechFeedback(false);
          setRemoveTechFeedback(false);
          setAttTechFeedback(true);
        });
      });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAddTechFeedback(false);
    setAttTechFeedback(false);
    setRemoveTechFeedback(false);
    setError(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleTechsUpdate)} className={classes.form}>
        <Typography className={classes.subTitle}>
          Adicionar Tecnologia
        </Typography>
        <TextField
          className={classes.input}
          id="tech-title"
          label="título"
          name="title"
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <InputLabel id="knowledge-amount-label" className={classes.input}>
          Nivel de conhecimento
        </InputLabel>
        <Select
          className={classes.input}
          labelId="knowledge-amount-label"
          id="knowledge-amount"
          onChange={(e) => setTechStatus(e.target.value)}
          value={techStatus}
          fullWidth
          style={{ borderRadius: "4px" }}
          margin="dense"
          variant="outlined"
        >
          <MenuItem value="Iniciante">Iniciante</MenuItem>
          <MenuItem value="Intermediário">Intermediário</MenuItem>
          <MenuItem value="Avançado">Avançado</MenuItem>
        </Select>
        <Snackbar
          open={Boolean(error)}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            Tecnologia já cadastrada!
          </Alert>
        </Snackbar>
        <Snackbar
          open={Boolean(addTechFeedback)}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            Tecnologia adicionada!
          </Alert>
        </Snackbar>
        <Button type="submit" className={classes.button} color="primary">
          Enviar
        </Button>
      </form>
      {user.techs.length !== 0 && (
        <>
          <form onSubmit={handleUpdateTech} className={classes.form}>
            <Typography className={classes.subTitle}>
              Atualizar Tecnologia
            </Typography>
            <InputLabel id="select-tech-label" className={classes.input}>
              Selecione a tecnologia:
            </InputLabel>
            <Select
              className={classes.input}
              labelId="select-tech-label"
              id="select-tech"
              onChange={(e) => setAttTech(e.target.value)}
              value={attTech}
              fullWidth
              style={{ borderRadius: "4px" }}
              margin="dense"
              variant="outlined"
            >
              {user.techs.map((actual, index) => {
                return (
                  <MenuItem value={actual.title} key={index}>
                    {actual.title}
                  </MenuItem>
                );
              })}
            </Select>
            {attTech && (
              <>
                <InputLabel
                  id="selected-tech-knowledge-amount-label"
                  className={classes.input}
                >
                  Nivel de conhecimento
                </InputLabel>
                <Select
                  className={classes.input}
                  labelId="selected-tech-knowledge-amount-label"
                  id="selected-tech-knowledge-amount"
                  onChange={(e) => setAttTechStatus(e.target.value)}
                  value={attTechStatus}
                  fullWidth
                  style={{ borderRadius: "4px" }}
                  margin="dense"
                  variant="outlined"
                >
                  <MenuItem value="Iniciante">Iniciante</MenuItem>
                  <MenuItem value="Intermediário">Intermediário</MenuItem>
                  <MenuItem value="Avançado">Avançado</MenuItem>
                </Select>
              </>
            )}
            <Snackbar
              open={Boolean(attTechFeedback)}
              autoHideDuration={3000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="success">
                Tecnologia atualizada!
              </Alert>
            </Snackbar>
            <Button type="submit" className={classes.button} color="primary">
              Atualizar
            </Button>
          </form>
          <form onSubmit={handleRemoveTech} className={classes.form}>
            <Typography className={classes.subTitle}>
              Excluir Tecnologia
            </Typography>
            <InputLabel id="delete-tech-label" className={classes.input}>
              Selecione a tecnologia:
            </InputLabel>
            <Select
              className={classes.input}
              labelId="delete-tech-label"
              id="delete-tech"
              onChange={(e) => setTech(e.target.value)}
              value={tech}
              fullWidth
              style={{ borderRadius: "4px" }}
              margin="dense"
              variant="outlined"
            >
              {user.techs.map((actual, index) => {
                return (
                  <MenuItem value={actual.title} key={index}>
                    {actual.title}
                  </MenuItem>
                );
              })}
            </Select>
            <Snackbar
              open={Boolean(removeTechFeedback)}
              autoHideDuration={3000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="success">
                Tecnologia removida!
              </Alert>
            </Snackbar>
            <Button type="submit" className={classes.button} color="primary">
              Remover
            </Button>
          </form>
        </>
      )}
    </>
  );
};

export default FormTechsUpdate;
