import { TextField, Button, FormControl } from "@material-ui/core";
import { StyledPaper } from "../../../globalStyles";

const FormUpdateProfile = () => {
  return (
    <FormControl>
      <StyledPaper elevation={2} heigth={"40vh"}>
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="old-password"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="course_module"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="bio"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="contact"
          variant="outlined"
          size="small"
        />
        <Button type="submit">Enviar</Button>
      </StyledPaper>
    </FormControl>
  );
};

export default FormUpdateProfile;
