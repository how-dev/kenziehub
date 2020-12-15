import { Link } from "react-router-dom";
import { makeStyles, Container } from "@material-ui/core";
import FormProfileUpdate from "../../components/form/formProfileUpdate";
import FormTechsUpdate from "../../components/form/formTechsUpdate";
import FormWorksUpdate from "../../components/form/formWorksUpdate";
import FormPasswordUpdate from "../../components/form/formPasswrodUpdate";
import { useSelector } from "react-redux";
import ImageIcon from "@material-ui/icons/Image";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";
import settings from "../../img/settings.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    display: "flex",
    marginBottom: "10vh",
  },
  link: {
    width: "20vw",
    heigth: "5vw",
    marginTop: "5vh",
    textDecoration: "none",
    color: "#3D405B",
  },
  name: {
    width: "25vw",
    marginLeft: "10vw",
    marginTop: "25vh",
    color: "#3D405B",
    fontWeight: "100",
  },
  avatarHolder: {
    display: "flex",
    flexDirection: "column",
    width: "25vw",
    margin: 0,
  },
  avatar: {
    width: "15vw",
    borderRadius: "100%",
    margin: "auto",
    marginTop: "5vh",
  },
  avatarButton: {
    marginLeft: "5vw",
  },
  formHolder: {
    display: "flex",
    flexDirection: "column",
  },
  avatarChange: {
    marginLeft: "10vw",
    display: "none",
  },
  avatarChangeLabel: {
    backgroundColor: "#81B291",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    padding: "6px 20px",
    marginLeft: "2vw",
  },
  logo: {
    width: "20vw",
    heigth: "20vh",
    marginLeft: "-10vw",
    marginTop: "-20vh",
  },
}));

const Settings = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.key);
  const classes = useStyles();

  const handleAvatarChange = (e) => {
    const data = new FormData();

    data.append("avatar", e.target.files[0]);

    axios
      .patch("https://kenziehub.me/users/avatar", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        localStorage.removeItem("userData");
        localStorage.setItem("userData", JSON.stringify(response.data));
        window.location.reload();
      })
      .catch((e) => console.error(e));
  };

  return (
    <Container className={classes.root}>
      <Container className={classes.header}>
        <Link to="/" className={classes.link}>
          <ArrowBackIcon color="primary" /> Voltar a lista de Devs
        </Link>
        <h1 className={classes.name}>{user.name}</h1>
        <Container className={classes.avatarHolder}>
          <img
            alt="Avatar"
            src={
              user.avatar_url
                ? user.avatar_url
                : "https://i1.wp.com/static.teamtreehouse.com/assets/content/default_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png?ssl=1"
            }
            className={classes.avatar}
          />
          <form>
            <label for="avatar" className={classes.avatarChangeLabel}>
              Selecione um arquivo <ImageIcon color="primary" />
            </label>
            <input
              type="file"
              id="avatar"
              onChange={handleAvatarChange}
              className={classes.avatarChange}
            />
          </form>
        </Container>
      </Container>
      <Container className={classes.formHolder}>
        <FormProfileUpdate />
        <FormPasswordUpdate />
        <FormTechsUpdate />
        <FormWorksUpdate />
      </Container>
      <img alt="settingsLogo" src={settings} className={classes.logo} />
    </Container>
  );
};

export default Settings;
