import { makeStyles } from "@material-ui/core/styles";
import HomePage from "./components/HomePage";

const useStyles = makeStyles(() => ({
  mainPageContainer: {
    backgroundImage: "linear-gradient(#ffffff , #68152b 60%)",
    minHeight: "calc(100vh - 85px)",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    position: "relative",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.mainPageContainer}>
      <HomePage />
    </div>
  );
}

export default App;
