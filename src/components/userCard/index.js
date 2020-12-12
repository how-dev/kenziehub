import { makeStyles } from "@material-ui/core/styles";
import { Paper, CardMedia, Button, Typography } from "@material-ui/core";
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
  avatar: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    margin: 10,
    marginLeft: 40,
  },
  name: {
    textAlign: "center",
    margin: 10,
  },
  button: {
    marginLeft: 70,
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
      <img
        alt={name}
        src={avatar_url ? avatar_url : tomateSkatista}
        title="Tomate Radical"
        className={classes.avatar}
      />

      <Typography
        gutterBottom
        variant="h6"
        style={{ margin: "0 auto" }}
        className={classes.name}
      >
        {name}
      </Typography>

      <Button
        size="small"
        color="primary"
        onClick={GoPageUser}
        className={classes.button}
      >
        Ver Página
      </Button>
    </Paper>
  );
};

export default UserCard;
