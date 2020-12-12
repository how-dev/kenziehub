import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/modules/users/actions";
import { useHistory } from "react-router-dom";
import tomateSkatista from "../../img/tomate.jpg";

const useStyles = makeStyles({
  root: {
    width: 230,
    margin: 10,
    marginTop: 20,
  },
});

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { name, avatar_url } = user;

  const history = useHistory();

  const GoPageUser = () => {
    dispatch(getUser(user.id));
    history.push(`/user/${user.id}`);
  };

  return (
    <Paper className={classes.root} elevation={3}>
      <CardMedia
        component="img"
        alt={name}
        height="200"
        src={avatar_url ? avatar_url : tomateSkatista}
        title="Tomate Radical"
      />

      <Typography gutterBottom variant="h6" style={{ margin: "0 auto" }}>
        {name}
      </Typography>

      <Button
        size="small"
        color="primary"
        onClick={GoPageUser}
        style={{ margin: "0 auto" }}
      >
        Ver Página
      </Button>
    </Paper>
  );
};

export default UserCard;
