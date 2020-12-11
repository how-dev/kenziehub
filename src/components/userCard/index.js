import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
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
  const classes = useStyles();

  const { name, avatar_url, email } = user;

  const history = useHistory();

  const GoPageUser = () => {
    history.push(`/pageuser/`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          src={avatar_url ? avatar_url : tomateSkatista}
          title="Tomate Radical"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {name}
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={GoPageUser}
          style={{ marginLeft: "10px" }}
        >
          Ver Página
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
