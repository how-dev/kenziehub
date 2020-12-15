import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import logo from "../../img/logo.png";
import { removeToken } from "../../store/modules/token/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  tabs: {
    [theme.breakpoints.down("lg")]: { display: "none" },
    [theme.breakpoints.up("lg")]: { display: "block" }
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
  const dispatch = useDispatch();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const key = useSelector((state) => state.key);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    setAnchorEl(null);
    history.push(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    handleClose("/login");
    dispatch(removeToken());
  };

  const handleTabChange = (e, value) => {
    history.push(value);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img
          alt=""
          src={logo}
          className={classes.logo}
          onClick={() => history.push("/")}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h6"
          className={classes.title}
          onClick={() => history.push("/")}
          style={{ cursor: "pointer" }}
        >
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
          <MenuItem onClick={() => handleClose("/")}>
            Lista de alunos
          </MenuItem>
          {key && (
            <MenuItem onClick={() => handleClose("/my-account")}>
              Minha conta
            </MenuItem>
          )}
          {key && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
          {!key && (
            <MenuItem onClick={() => handleClose("/login")}>Login</MenuItem>
          )}
          {!key && (
            <MenuItem onClick={() => handleClose("/sign-up")}>
              Cadastro
            </MenuItem>
          )}
        </Menu>
        <Tabs
          value={location.pathname}
          onChange={handleTabChange}
          aria-label="simple tabs example"
          className={classes.tabs}
        >
          <Tab value={location.pathname} label="Lista de Devs" />
          {key && <Tab value="/my-account" label="Minha conta" />}
          {key && <Tab onClick={handleLogout} label="Logout" />}
          {!key && <Tab value="/login" label="Login" />}
          {!key && <Tab value="/sign-up" label="Cadastro" />}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default KenzieAppBar;
