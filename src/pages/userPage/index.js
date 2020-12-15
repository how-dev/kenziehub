import { Box, Container, makeStyles, Button } from "@material-ui/core";
import { BounceLoader } from "react-spinners";
import Paper from "@material-ui/core/Paper";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  allData: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "flex-end",
    width: "100%"
  },
  datas: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    width: "50%",
    lineHeight: 1.5,
    background: "#F4F1DE",
    display: "flex",
    flexDirection: "column",
    margin: 0
  },
  sampleDatas: {
    display: "flex",
    marginTop: 30,
    padding: 0
  },
  hardSkills: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: 200,
    fontSize: 10,
    background: "#F4F1DE"
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: "100%",
    boxShadow: "1px 1px 3px gray",
    marginBottom: 15
  },
  profileImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: 250,
    height: 180,
    color: "#3D405B",
    padding: 0
  },
  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  aboveTechs: {
    display: "flex",
    marginRight: 0,
    width: 400,
    padding: 0
  },
  buttonBack: {
    fontSize: 10,
    marginBottom: 50
  }
}));

const UserPage = () => {
  const [userData, setData] = useState();
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const id = location.pathname.replace("/user/", "");

  useEffect(() => {
    axios
      .get(`https://kenziehub.me/users/${id}`)
      .then((res) => setData(res.data));
  }, [id]);

  if (userData) {
    console.log(userData.techs);
    return (
      <>
        <Box component="div" className={classes.profile}>
          <Container className={classes.allDatas}>
            <Container className={classes.sampleDatas}>
              <Container className={classes.profileImage}>
                <Button
                  color="primary"
                  className={classes.buttonBack}
                  onClick={() => history.push("/")}
                >
                  <ArrowBackIosIcon /> Voltar para a página de devs
                </Button>
                <img
                  alt="..."
                  src={
                    userData.avatar_url
                      ? userData.avatar_url
                      : "https://i1.wp.com/static.teamtreehouse.com/assets/content/default_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png?ssl=1"
                  }
                  className={classes.avatar}
                />
                {userData.name}
              </Container>
              <Paper className={classes.datas}>
                <span>
                  <span style={{ color: "#3D405B" }}>Nome</span>:{" "}
                  {userData.name}
                </span>{" "}
                <br />
                <span>
                  <span style={{ color: "#3D405B" }}>Email</span>:{" "}
                  {userData.email}
                </span>{" "}
                <br />
                <span>
                  <span style={{ color: "#3D405B" }}>Módulo do curso</span>:{" "}
                  {userData.course_module}
                </span>{" "}
                <br />
                <span>
                  <span style={{ color: "#3D405B" }}>Contato</span>:{" "}
                  {userData.contact}
                </span>{" "}
                <br />
                <span>
                  <span style={{ color: "#3D405B" }}>Sobre</span>:{" "}
                  {userData.bio}
                </span>
              </Paper>
            </Container>
            <Container className={classes.aboveTechs}>
              <Paper className={classes.hardSkills}>
                Tecnologias:{" "}
                {userData.techs.map((skill, index) => (
                  <p key={index}>
                    <span style={{ color: "#3D405B", fontSize: 10 }}>
                      {skill.title}
                    </span>
                    {`: ${skill.status}`}
                  </p>
                ))}
              </Paper>
              <Paper className={classes.hardSkills}>
                Trabalhos:{" "}
                {userData.works.map((job, index) => (
                  <p key={index}>
                    <p style={{ color: "#3D405B", fontSize: 13 }}>
                      {job.title}
                    </p>
                    <p>{`Descrição: ${job.description}`}</p>
                    <p>{`Url: ${job.deploy_url}`}</p>
                  </p>
                ))}
              </Paper>
            </Container>
          </Container>
        </Box>
      </>
    );
  } else {
    return (
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        <BounceLoader color="#E07A5F" />
      </div>
    );
  }
};

export default UserPage;
