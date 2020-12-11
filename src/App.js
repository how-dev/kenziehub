import "./App.css";
import KenzieAppBar from "./components/appBar";
import Router from "./router";
import Wave from "react-wavify";

const App = () => {
  return (
    <>
      <KenzieAppBar />
      <Router />
      <Wave
        fill="#81b29a"
        paused={false}
        options={{
          height: 90,
          amplitude: 20,
          speed: 0.09,
          points: 8
        }}
        style={{
          position: "fixed",
          bottom: -10
        }}
      />
    </>
  );
};

export default App;
