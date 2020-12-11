import { TextField, Button } from "@material-ui/core";
import { StyledPaper } from "../../../globalStyles";

const FormUpdateProfile = () => {
  return (
    <>
      <StyledPaper elevation={2} heigth={"40vh"}>
        <TextField id="outlined-basic" label="name" variant="outlined" />
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <TextField id="outlined-basic" label="password" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="old-password"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="course_module"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="bio" variant="outlined" />
        <TextField id="outlined-basic" label="contact" variant="outlined" />
        <Button>Enviar</Button>
      </StyledPaper>
    </>
  );
};

export default FormUpdateProfile;
