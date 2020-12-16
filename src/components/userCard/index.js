import { Paper, Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/modules/users/actions";
import { useHistory } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 230,
    height: 230,
    margin: 10,
    marginTop: 20,
    background: "#F4F1DE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: "100%",
    boxShadow: "1px 1px 3px gray",
    marginBottom: 10,
  },
  name: {
    textAlign: "center",
    marginBottom: 10,
    color: "#3D405B",
    textOverflow: "ellipsis",
    height: "30px",
    fontSize: "2vh"
  },
});

const UserPageButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 13,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#E07A5F',
    borderColor: '#E07A5F',
    height: 25,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#D27860',
      borderColor: '#E07A5F',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#E07A5F',
      borderColor: '#E07A5F',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #F3967E',
    },
  },
})(Button);

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
        src={avatar_url ? avatar_url : "https://i1.wp.com/static.teamtreehouse.com/assets/content/default_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png?ssl=1"}
        title="Tomate Radical"
        className={classes.avatar}
      />

      <Typography
        gutterBottom
        variant="h6"
        className={classes.name}
      >
      {name}
      </Typography>

      <UserPageButton onClick={GoPageUser} variant="contained" color="primary" disableRipple>
        Ver Página
      </UserPageButton>
    </Paper>
  );
};

export default UserCard;
