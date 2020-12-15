import { Link } from "react-router-dom";
import { makeStyles, Container } from "@material-ui/core";
import FormProfileUpdate from "../../components/form/formProfileUpdate";
import FormTechsUpdate from "../../components/form/formTechsUpdate";
import FormWorksUpdate from "../../components/form/formWorksUpdate";
import FormPasswordUpdate from "../../components/form/formPasswordUpdate";
import { useSelector } from "react-redux";
import ImageIcon from "@material-ui/icons/Image";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";
import settings from "../../img/settings.svg";

import { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

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
    width: "200px",
    heigth: "200px",
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
  tabBar: {
    width: "35vw",
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
}));

const Settings = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.key);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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
      <div className={classes.formHolder}>
        <FormProfileUpdate />
        <FormPasswordUpdate />
        <FormTechsUpdate />
        <FormWorksUpdate />

        <img alt="settingsLogo" src={settings} className={classes.logo} />
      </div>
    </Container>
  );
};

export default Settings;
