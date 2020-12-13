import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string("The email format is invalid")
    .email("The email format is invalid")
    .required("Please, inform the email"),
  password: yup
    .string("The password format is invalid")
    .min(6, "The password must have at least 6 charactes")
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
    .url("O formato do contato é inválido")
    .required("Por favor, informe um contato"),
  course_module: yup.string("formato inválido")
});

export const settingsSchema = yup.object().shape({
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
    .url("O formato do contato é inválido")
    .required("Por favor, informe um contato"),
  course_module: yup.string("formato inválido"),
  title: yup
    .string("O formato do título é inválido")
    .required("Por favor, informe o título"),
  description: yup
    .string("O formato da descrição é inválido")
    .required("Por favor, informe a descrição"),
  deploy_url: yup.string().url("O formato da url é inválido")
});
