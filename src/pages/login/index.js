import { Holder, LoginHolder } from "./style";
import { useHistory, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useEffect} from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const history = useHistory();
  const {
    register,
    unregister,
    setValue,
    errors,
    handleSubmit,
    setError,
  } = useForm();

  useEffect(() => {
    register("email", { required: "O campo de email não pode estar vazio" });
    register("password", { required: "O campo de senha não pode estar vazio" });

    return () => {
      unregister("email");
      unregister("password");
    };
  }, [register, unregister]);


  const tryLogin = (data) => {
    console.log(data)
    axios.post("https://kenziehub.me/sessions", {...data})
    .then((res) => {
      localStorage.setItem("userData", JSON.stringify(res.data.user))
      localStorage.setItem("token", res.data.token)
      history.push("/users-list")
    })
    .catch((err) =>
        setError("password", {message: "Email ou senha inválido"})
    )
  };

  return (
    <Holder>
      <img
        alt="placeholder"
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ed6da7a8-222b-42a5-a01a-21c825ab3974/user_group.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201210T162248Z&X-Amz-Expires=86400&X-Amz-Signature=72db71fccfe6f372f784c75eae24caaa5d39353d6b4c1b45a9d4e5f05d36966b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22user_group.svg%22"
      />
      <LoginHolder>
        <form
        onSubmit={handleSubmit(tryLogin)}
        noValidate
        autoComplete="off">
        <TextField
        onChange={(e) => setValue("email", e.target.value)}
        id="outlined-basic"
        label="Email"
        variant="outlined" />
        <TextField 
        onChange={(e) => setValue("password", e.target.value)}
        id="outlined-basic" 
        label="Password"
        variant="outlined" />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        {errors.email && <p>{errors.email.message}</p>}
        {errors.password && <p>{errors.password.message}</p>}

        </form>
        <div>
          Ainda não tem uma conta?{" "}
          <Link onClick={() => history.push("/sign-up")}>Cadastre-se</Link>
        </div>
      </LoginHolder>
    </Holder>
  );
};

export default Login;
