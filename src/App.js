import "./App.css";
import KenzieAppBar from "./components/appBar";
import Router from "./router";
import Wave from "react-wavify";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  page: {
    position: "relative",
    minHeight: "80vh",
    paddingBottom: "20vh"
  },
  wave: {
    position: "absolute",
    bottom: 0,
    marginBottom: -5
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
          height: 70,
          amplitude: 20,
          speed: 0.09,
          points: 8
        }}
        className={classes.wave}
      />
    </Paper>
  );
};

export default App;
