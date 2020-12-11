import { TextField, Button } from "@material-ui/core";
import { StyledPaper } from "../../../globalStyles";

const FormWorksUpdate = () => {
  return (
    <>
      <StyledPaper elevation={2} heigth={"25vh"}>
        <TextField id="outlined-basic" label="title" variant="outlined" />
        <TextField id="outlined-basic" label="description" variant="outlined" />
        <TextField id="outlined-basic" label="deploy_url" variant="outlined" />
        <Button>Enviar</Button>
      </StyledPaper>
    </>
  );
};

export default FormWorksUpdate;
