import { Holder, LoginHolder } from "./style";
import { useHistory, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = () => {
  const history = useHistory();

  const handleSubmit = () => {};

  return (
    <Holder>
      {/*
        imagem placeholder 
        */}
      <img
        alt="placeholder"
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ed6da7a8-222b-42a5-a01a-21c825ab3974/user_group.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201209T105740Z&X-Amz-Expires=86400&X-Amz-Signature=5048be42b7e136607f420f94bef862ff4b10cfb5c3aed6a9fde64da8bb70ecac&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22user_group.svg%22"
      />
      <LoginHolder>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained" color="primary">
          Login
        </Button>
        <div>
          Ainda não tem uma conta?{" "}
          <Link onClick={() => history.push("/sign-up")}>Cadastre-se</Link>
        </div>
      </LoginHolder>
    </Holder>
  );
};

export default Login;
