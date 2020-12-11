import { Box, Container, makeStyles, Button } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    allData: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    datas: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      color: theme.palette.text.secondary,
      height: 400,
      width: 400,
      lineHeight: 6,
    },
    sampleDatas: {
        display: "flex",
        justifyContent: "center",
    },
    hardSkills: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 150,
        width: 150,
        fontSize: 12,
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: "100%",
    },
    profileImage: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        transform: "translateY(-60%)",
        height: 180,
    },
    profile: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    aboveTechs: {
        display: "flex",
        justifyContent: "space-around",
    },
    buttonBack: {
        
    },
  }));

const UserPage = ({ userData }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <Button 
                variant="outlined" 
                color="primary" 
                className={classes.buttonBack} 
                onClick={() => history.push("/users-list")}
            >
                <ArrowBackIosIcon /> Voltar para a página de devs
            </Button>

            <Box component="div"  className={classes.profile}>
                
                <Container className={classes.profileImage}>
                    <img alt="..." src={userData.avatar_url ? userData.avatar_url : "https://www.rbsdirect.com.br/imagesrc/25945516.jpg?w=700"} className={classes.avatar}/>
                    {userData.name}
                </Container>
                <Container className={classes.allDatas}>
                    <Container className={classes.sampleDatas}>
                        <Paper className={classes.datas}>
                            Nome: {userData.name} <br />
                            Email: {userData.email} <br />
                            Módulo do curso: {userData.course_module} <br />
                            Contato: {userData.contact}
                        </Paper>
                    </Container>
                    <Container className={classes.aboveTechs}>
                        <Paper className={classes.hardSkills}>Tecnologias: {userData.techs.map(skill => `${skill.title}, ${skill.status}`)}</Paper>
                        <Paper className={classes.hardSkills}>Trabalhos: {userData.works.map(job => `${job.title}, ${job.description}, ${job.deploy_url}`)}</Paper>
                    </Container> 
                </Container>

            </Box>
        </>
    )
}

export default UserPage;
