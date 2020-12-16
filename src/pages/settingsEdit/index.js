import { Link } from "react-router-dom";
import { makeStyles, Container } from "@material-ui/core";
import FormProfileUpdate from "../../components/form/formProfileUpdate";
import FormTechsUpdate from "../../components/form/formTechsUpdate";
import FormWorksUpdate from "../../components/form/formWorksUpdate";
import FormPasswordUpdate from "../../components/form/formPasswordUpdate";
import { useSelector } from "react-redux";
import { useState, useEffect} from "react";
import ImageIcon from "@material-ui/icons/Image";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";
import settings from "../../img/settings.svg";

import PropTypes from "prop-types";
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "1700px",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    marginBottom: "10vh",
  },
  link: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minWidth: "150px",
    heigth: "5vw",
    marginTop: "5vh",
    textDecoration: "none",
    color: "#3D405B",
  },
  name: {
    width: "300px",
    color: "#3D405B",
    fontWeight: "100",
  },
  avatarHolder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "250px",
    margin: 0,
  },
  avatar: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginTop: "5vh",
  },
  avatarButton: {
    width: "200px",
  },
  formHolder: {
    display: "flex",
    flexDirection: "column",
  },
  avatarChange: {
    display: "none",
  },
  avatarChangeLabel: {
    display: "flex",
    width: "180px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#81B291",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    padding: "6px 20px",
  },
  logo: {
    width: "20vw",
    heigth: "20vh",
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
  const [width, setWidth] = useState(window.innerWidth)
  const classes = useStyles();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
    }, [width]);


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
      <Link to="/" className={classes.link}>
          <ArrowBackIcon color="primary" /> Voltar a lista de Devs
        </Link>
      <Container className={classes.header}>
        
        <h1 className={classes.name}>{user.name}</h1>
        <Container className={classes.avatarHolder}>
          <div className={classes.avatar} style={{overflow: "hidden", display:"flex", justifyContent:"center", alignItems:"center", boxShadow:"1px 1px 3px gray"}}>
          <img
          style={{height: "100%"}}
            alt="Avatar"
            src={
              user.avatar_url
                ? user.avatar_url
                : "https://i1.wp.com/static.teamtreehouse.com/assets/content/default_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png?ssl=1"
            }
          />
          </div>
          <form>
            <label htmlFor="avatar" className={classes.avatarChangeLabel}>
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

        {width > 1000 && <img alt="settingsLogo" src={settings} className={classes.logo} />}
      </div>
    </Container>
  );
};

export default Settings;
