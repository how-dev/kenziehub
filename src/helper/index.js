import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string("O formato do e-mail é inválido")
    .email("O formato do e-mail é inválido")
    .required("Por Favor, informe o e-mail"),
  password: yup
    .string("O formato da senha é inválido")
    .min(6, "A Senha deve ter pelo menos 6 caracteres"),
});

export const signUpSchema = yup.object().shape({
  email: yup
    .string("O formato do e-mail é inválido")
    .email("O formato do e-mail é inválido")
    .required("Por Favor, informe o e-mail"),
  password: yup
    .string("O formato da senha é inválido")
    .min(6, "A Senha deve ter pelo menos 6 caracteres"),
  name: yup
    .string("O formato do nome é inválido")
    .matches(
      /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
      "Seu nome e sobrenome devem conter apenas letras"
    )
    .required("Por favor, informe seu nome"),
  bio: yup
    .string("O formato da bio é inválido")
    .required("Por favor, fale um pouco sobre você"),
  contact: yup
    .string("O formato do contato é inválido")
    .required("Por favor, informe um contato"),
  course_module: yup.string("Formato inválido"),
});

export const settingsSchema = yup.object().shape({
  email: yup
    .string("O formato do e-mail é inválido")
    .email("O formato do e-mail é inválido"),
  name: yup.string("O formato do nome é inválido"),
  bio: yup.string("O formato da bio é inválido"),
  contact: yup.string("O formato do contato é inválido"),
  course_module: yup.string("formato inválido"),
});

export const passwordSchema = yup.object().shape({
  password: yup
    .string("O formato da senha é inválido")
    .min(6, "A Senha deve ter pelo menos 6 caracteres"),
  old_password: yup
    .string("O formato da senha é inválido")
    .min(6, "A Senha deve ter pelo menos 6 caracteres"),
});

export const techsSchema = yup.object().shape({
  title: yup
    .string("O formato do título é inválido")
    .required("Informe um título"),
});

export const worksSchema = yup.object().shape({
  title: yup
    .string("O formato do título é inválido")
    .required("Informe um título"),
  description: yup
    .string("O formato do título é inválido")
    .required("Informe uma descrição"),
  deploy_url: yup
    .string()
    .url("O formato da url é inválido")
    .required("Informe o link do deploy"),
});
