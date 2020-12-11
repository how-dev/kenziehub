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

  const { name, avatar_url } = user;

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
          height="200"
          src={avatar_url ? avatar_url : tomateSkatista}
          title="Tomate Radical"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" style={{ margin: "0 auto" }}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={GoPageUser}
          style={{ margin: "0 auto" }}
        >
          Ver Página
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
