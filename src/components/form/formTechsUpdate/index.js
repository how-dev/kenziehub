import { TextField, Button } from "@material-ui/core";
import { StyledPaper } from "../../../globalStyles";

const FormTechsUpdate = () => {
  return (
    <>
      <StyledPaper elevation={2} heigth={"25vh"}>
        <TextField id="outlined-basic" label="title" variant="outlined" />
        <TextField id="outlined-basic" label="status" variant="outlined" />
        <Button>Enviar</Button>
      </StyledPaper>
    </>
  );
};

export default FormTechsUpdate;
