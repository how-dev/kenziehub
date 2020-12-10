import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import logo from "../../img/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: "1.5em",
    textTransform: "uppercase"
  },
  logo: {
    height: "2em",
    margin: "1em"
  }
}));

const KenzieAppBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const key = useSelector((state) => state.key.key);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    setAnchorEl(null);
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} className={classes.logo} />
        <Typography variant="h6" className={classes.title}>
          Hub
        </Typography>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleClose("/users-list")}>
            Lista de alunos
          </MenuItem>
          {key && (
            <MenuItem onClick={() => handleClose("/my-account")}>
              Minha conta
            </MenuItem>
          )}
          {key && (
            <MenuItem onClick={() => handleClose("/logout")}>Logout</MenuItem>
          )}
          {!key && (
            <MenuItem onClick={() => handleClose("/login")}>Login</MenuItem>
          )}
          {!key && (
            <MenuItem onClick={() => handleClose("/sign-up")}>
              Cadastro
            </MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default KenzieAppBar;
