import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string("The email format is invalid")
    .email("The email format is invalid")
    .required("Please, inform the email"),
  password: yup
    .string("The password format is invalid")
    .min(6, "The password must have at least 6 charactes"),
});

export const signUpSchema = yup.object().shape({
  email: yup
    .string("The email format is invalid")
    .email("The email format is invalid")
    .required("Please, inform the email"),
  password: yup
    .string("The password format is invalid")
    .min(6, "The password must have at least 6 charactes"),
  name: yup
    .string("The name format is invalid")
    .matches(
      /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
      "You must inform at least your name and surname and contains only letters"
    )
    .required("Please, inform your name"),
  bio: yup
    .string("The bio format is invalid")
    .required("Please, tell us a little about yourself"),
  contact: yup
    .string("The contact format is invalid")
    .url("The contact format is invalid")
    .required("Please, inform your contact"),
  course_module: yup.string().required("Please, inform your course module"),
});
