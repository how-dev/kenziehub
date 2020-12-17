import 
{ makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core/";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

import { removeToken } from "../../store/modules/token/actions";

import logo from "../../img/logo.png";

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
  const user = useSelector((state) => state.user);


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
            <MenuItem onClick={() => handleClose(`/user/${user.id}`)}>
              Meu perfil
            </MenuItem>
          )}
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
          <Tab value={location.pathname} onClick={() => history.push("/")} label="Lista de Devs" />
          {key && <Tab value="/my-account" label="Minha conta" />}
          {key && <Tab value={`/user/${user.id}`} label="Meu perfil" />}
          {key && <Tab onClick={handleLogout} label="Logout" />}
          {!key && <Tab value="/login" label="Login" />}
          {!key && <Tab value="/sign-up" label="Cadastro" />}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default KenzieAppBar;
