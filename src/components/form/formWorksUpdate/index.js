import {
  Typography,
  TextField,
  Button,
  makeStyles,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { worksSchema } from "../../../helper";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../store/modules/user/thunk";
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
    marginBottom: "3vh",
  },
}));

const FormWorksUpdate = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.key);
  const user = useSelector((state) => state.user);
  const [work, setWork] = useState("");
  const [attWork, setAttWork] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [workUrl, setWorkUrl] = useState("");
  const baseUrl = "https://kenziehub.me/";

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(worksSchema),
  });

  const handleWorksUpdate = (data) => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.post(`${baseUrl}users/works`, data, headers).then((res) => {
      console.log(res);
      axios
        .get(`${baseUrl}users/${user.id}`)
        .then((res) => {
          dispatch(loginThunk(res.data));
        })
        .then((res) => {
          window.location.reload();
        });
    });
  };

  const handleRemoveWork = (e) => {
    e.preventDefault();

    const actualWork = user.works.filter((actual) => actual.title === work);
    const id = actualWork[0].id;
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.delete(`${baseUrl}users/works/${id}`, headers).then((res) => {
      axios.get(`${baseUrl}users/${user.id}`).then((res) => {
        dispatch(loginThunk(res.data));
      });
    });
  };

  const handleUpdateWork = (e) => {
    e.preventDefault();

    const data = {
      title: workTitle,
      description: workDescription,
      deploy_url: workUrl,
    };

    const actualWork = user.works.filter((actual) => actual.title === attWork);
    const id = actualWork[0].id;
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.put(`${baseUrl}users/works/${id}`, data, headers).then((res) => {
      axios.get(`${baseUrl}users/${user.id}`).then((res) => {
        dispatch(loginThunk(res.data));
      });
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleWorksUpdate)} className={classes.form}>
        <Typography className={classes.subTitle}>
          Adicionar trabalhos
        </Typography>
        <TextField
          className={classes.input}
          id="work-title"
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
          id="work-description"
          label="descrição"
          name="description"
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <TextField
          className={classes.input}
          id="work-deploy_url"
          label="url do deploy"
          name="deploy_url"
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errors.deploy_url}
          helperText={errors.deploy_url?.message}
        />
        <Button type="submit" className={classes.button} color="primary">
          Enviar
        </Button>
      </form>
      {user.works.length !== 0 && (
        <>
          <form onSubmit={handleUpdateWork} className={classes.form}>
            <Typography className={classes.subTitle}>
              Atualizar Trabalhos
            </Typography>
            <InputLabel id="tech-select-label" className={classes.input}>
              Selecione a tecnologia:
            </InputLabel>
            <Select
              className={classes.input}
              labelId="tech-select-label"
              id="tech-select"
              onChange={(e) => setAttWork(e.target.value)}
              value={attWork}
              fullWidth
              style={{ background: "#F4F1DE", borderRadius: "4px" }}
            >
              {user.works.map((actual, index) => {
                return (
                  <MenuItem value={actual.title} key={index}>
                    {actual.title}
                  </MenuItem>
                );
              })}
            </Select>
            {attWork && (
              <>
                <TextField
                  className={classes.input}
                  id="selected-work-title"
                  label="título"
                  name="title"
                  variant="outlined"
                  size="small"
                  onChange={(e) => setWorkTitle(e.target.value)}
                  value={workTitle}
                />
                <TextField
                  className={classes.input}
                  id="selected-work-description"
                  label="descrição"
                  name="description"
                  variant="outlined"
                  size="small"
                  onChange={(e) => setWorkDescription(e.target.value)}
                  value={workDescription}
                />
                <TextField
                  className={classes.input}
                  id="selected-work-deploy_url"
                  label="url do deploy"
                  name="deploy_url"
                  variant="outlined"
                  size="small"
                  onChange={(e) => setWorkUrl(e.target.value)}
                  value={workUrl}
                />
              </>
            )}
            <Button type="submit" className={classes.button} color="primary">
              Atualizar
            </Button>
          </form>
          <form onSubmit={handleRemoveWork} className={classes.form}>
            <Typography className={classes.subTitle}>
              Excluir Trabalhos
            </Typography>
            <InputLabel id="delete-work-label" className={classes.input}>
              Selecione o trabalho:
            </InputLabel>
            <Select
              className={classes.input}
              labelId="delete-work-label"
              id="delete-work"
              onChange={(e) => setWork(e.target.value)}
              value={work}
              fullWidth
              style={{ background: "#F4F1DE", borderRadius: "4px" }}
            >
              {user.works.map((actual, index) => {
                return (
                  <MenuItem value={actual.title} key={index}>
                    {actual.title}
                  </MenuItem>
                );
              })}
            </Select>
            <Button
              type="submit"
              className={classes.button}
              color="primary"
              style={{ marginBottom: "6vh" }}
            >
              Remover
            </Button>
          </form>
        </>
      )}
    </>
  );
};

export default FormWorksUpdate;
