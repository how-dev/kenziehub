import "./App.css";
import KenzieAppBar from "./components/appBar";
import Router from "./router";
import Wave from "react-wavify";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  page: {
    position: "relative",
    minHeight: "80vh",
    paddingBottom: "10vh"
  },
  wave: {
    position: "absolute",
    bottom: 0,
    transform: "translateY(15%)"
  },
  link: {
    position: "absolute",
    bottom: 0,
    color: "#ffffff",
    right: "1rem"
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.page}>
      <KenzieAppBar />
      <Router />
      <Wave
        fill="#3d405b"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.09,
          points: 8
        }}
        className={classes.wave}
      />
      <Link
        href="https://kenzie.com.br/"
        target="_blank"
        className={classes.link}
      >
        Kenzie Academy Brasil
      </Link>
    </Paper>
  );
};

export default App;
