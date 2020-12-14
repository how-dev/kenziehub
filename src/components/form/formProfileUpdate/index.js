import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { StyledPaper } from "../../../globalStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { settingsSchema } from "../../../helper";
import { useState } from "react";
import axios from "axios";

const FormUpdateProfile = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [module, setModule] = useState("");
  const [moduleRegister, setModuleRegister] = useState({});
  const [editable, setEditable] = useState(false);

  const { register, unregister, handleSubmit, errors } = useForm({
    resolver: yupResolver(settingsSchema),
  });

  const handleModuleChange = (event) => {
    setModuleRegister({ course_module: event.target.value });
    register(moduleRegister.course_module);
    setModule(event.target.value);
  };

  const handleProfileUpdate = (data) => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .put("https://kenziehub.me/profile", data, headers)
      .then((res) => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit(handleProfileUpdate)}>
      <StyledPaper elevation={2} heigth={"40vh"}>
        <TextField
          disabled={!editable}
          id="outlined-basic"
          label="name"
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          disabled={!editable}
          id="outlined-basic"
          label="email"
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          disabled={!editable}
          id="outlined-basic"
          label="password"
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          disabled={!editable}
          id="outlined-basic"
          label="old_password"
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errors.old_password}
          helperText={errors.old_password?.message}
        />
        <InputLabel id="demo-simple-select-outlined-label">
          Selecione o seu módulo:
        </InputLabel>
        <Select
          disabled={!editable}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleModuleChange}
          value={module}
          fullWidth
          style={{ background: "#F4F1DE", borderRadius: "4px" }}
        >
          <MenuItem value={"Primeiro módulo (Introdução ao Frontend)"}>
            Primeiro módulo (Introdução ao Frontend)
          </MenuItem>
          <MenuItem value={"Segundo módulo (Frontend Avançado)"}>
            Segundo módulo (Frontend Avançado)
          </MenuItem>
          <MenuItem value={"Terceiro módulo (Introdução ao Backend)"}>
            Terceiro módulo (Introdução ao Backend)
          </MenuItem>
          <MenuItem value={"Quarto módulo (Backend Avançado)"}>
            Quarto módulo (Backend Avançado)
          </MenuItem>
        </Select>
        <TextField
          disabled={!editable}
          id="outlined-basic"
          label="bio"
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errors.bio}
          helperText={errors.bio?.message}
        />
        <TextField
          disabled={!editable}
          id="outlined-basic"
          label="contact"
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errors.contact}
          helperText={errors.contact?.message}
        />
        <Button onClick={() => setEditable(!editable)}>Editar</Button>
        <Button type="submit">Enviar</Button>
      </StyledPaper>
    </form>
  );
};

export default FormUpdateProfile;
