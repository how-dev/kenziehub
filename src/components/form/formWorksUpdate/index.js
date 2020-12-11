import { TextField, Button, FormControl } from "@material-ui/core";
import { StyledPaper } from "../../../globalStyles";

const FormWorksUpdate = () => {
  return (
    <FormControl>
      <StyledPaper elevation={2} heigth={"25vh"}>
        <TextField
          id="outlined-basic"
          label="title"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="description"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="deploy_url"
          variant="outlined"
          size="small"
        />
        <Button type="submit">Enviar</Button>
      </StyledPaper>
    </FormControl>
  );
};

export default FormWorksUpdate;
