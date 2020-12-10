import FormSignUp from "../../components/form/formSignUp/index";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <FormSignUp />
      <Grid container justify="flex-end">
        <Grid item xs={12}>
          <Link to="/login">Already have an account? Sign in</Link>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
