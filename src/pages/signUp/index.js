import FormSignUp from "../../components/form/formSignUp/index";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  return (
    <>
      <FormSignUp />
      <button onClick={() => history.push("/login")}>
        Already have an account? Sign in
      </button>
    </>
  );
};

export default SignUp;
