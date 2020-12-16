import { Box, Container, makeStyles, Button } from "@material-ui/core";
import { BounceLoader } from "react-spinners";
import Paper from "@material-ui/core/Paper";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  allDatas: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: 0,
    margin: 0,
  },
  datas: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    lineHeight: 1.5,
    background: "#F4F1DE",
    display: "flex",
    flexDirection: "column",
    width: "500px",
    margin: "auto",
    paddingRight: 0,
    [theme.breakpoints.down(800)]: {
      width: "90%",
      marginTop: "100px",
    },
  },
  sampleDatas: {
    display: "flex",
    textAlign: "center",
    marginTop: 30,
    padding: 0,
    [theme.breakpoints.down(800)]: {
      flexDirection: "column",
      alignItems:"center",
    },
  },
  hardSkills: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "218px",
    [theme.breakpoints.down(800)]: {
      width: "90%"
    },
    fontSize: 10,
    background: "#F4F1DE",
    margin: "10px 0 0 0px",
    
  },
  avatar: {
    boxShadow: "1px 1px 3px gray",
    marginBottom: 15,
  },
  profileImage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#3D405B",
    marginTop: 30,
    padding: 0,
    [theme.breakpoints.down(800)]: {
      flexDirection: "column"
    },
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  aboveTechs: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "80px",
    width: "100%",
    padding: 0,
    [theme.breakpoints.down(450)]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    [theme.breakpoints.down(800)]: {
        justifyContent: "center",
      },
    
  },
  buttonBack: {
    fontSize: 10,
    marginBottom: 50,
  },
  profileBox: {
    width: "520px",
    [theme.breakpoints.down(800)]: {
      width: "90%",
    },
  },
  dataBox: {
    maxWidth: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    return (
      <Box component="div" className={classes.profile}>
        <Container className={classes.profileImage}>
          <div className={classes.dataBox}>
            <Button
              className={classes.buttonBack}
              onClick={() => history.push("/")}
            >
              <ArrowBackIosIcon /> Voltar para a página de devs
            </Button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              >
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  overflow: "hidden",
                  display: "flex",
                  
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <img
                alt="..."
                style={{height: "100%"}}
                src={
                    userData.avatar_url
                    ? userData.avatar_url
                    : "https://i1.wp.com/static.teamtreehouse.com/assets/content/default_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png?ssl=1"
                }
                className={classes.avatar}
                />
              </div>
            </motion.div>
            <p className={classes.sampleDatas}>
              {userData.name}
            </p>
          </div>
              
          <div className={classes.profileBox}>
            <Container className={classes.allDatas}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                
              >
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
              </motion.div>
            </Container>
            <Container className={classes.aboveTechs}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
                style={{width: "100%"}}
                >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 4 }}
                style={{width: "100%"}}
                >
                <Paper className={classes.hardSkills}>
                  Trabalhos:{" "}
                  {userData.works.map((job, index) => (
                    <div key={index}>
                      <p style={{ color: "#3D405B", fontSize: 13 }}>
                        {job.title}
                      </p>
                      <p>{`Descrição: ${job.description}`}</p>
                      <p>{`Url: ${job.deploy_url}`}</p>
                    </div>
                  ))}
                </Paper>
              </motion.div>
            </Container>
          </div>
        </Container>
      </Box>
    );
  } else {
    return (
      <div style={{ position: "absolute", top: "50%", left: "45%" }}>
        <BounceLoader color="#E07A5F" />
      </div>
    );
  }
};

export default UserPage;
