import { Link } from "react-router-dom";
import { makeStyles, Container } from "@material-ui/core";
import FormProfileUpdate from "../../components/form/formProfileUpdate";
import FormTechsUpdate from "../../components/form/formTechsUpdate";
import FormWorksUpdate from "../../components/form/formWorksUpdate";
import FormPasswordUpdate from "../../components/form/formPasswrodUpdate";
import { useSelector } from "react-redux";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    display: "flex",
  },
  link: {
    width: "10vw",
    heigth: "5vw",
  },
  name: {
    width: "20vw",
    marginLeft: "23vw",
    marginTop: "25vh",
    color: "#3D405B",
  },
  avatarHolder: {
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    width: "20vw",
    borderRadius: "100%",
    marginLeft: "auto",
  },
  avatarButton: {
    marginLeft: "5vw",
  },
  formHolder: {
    display: "flex",
    flexDirection: "column",
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
        <Link to="/" style={{ height: "5vh", marginTop: "5vh" }}>
          Voltar
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
            <input type="file" id="avatar" onChange={handleAvatarChange} />
          </form>
        </Container>
      </Container>
      <Container className={classes.formHolder}>
        <FormProfileUpdate />
        <FormPasswordUpdate />
        <FormTechsUpdate />
        <FormWorksUpdate />
      </Container>
    </Container>
  );
};

export default Settings;
