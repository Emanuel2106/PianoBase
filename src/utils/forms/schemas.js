import * as Field from "yup";

export const loginFormSchema = Field.object({
  email: Field.string()
    .email("Debes ingresar un email valido")
    .required("El email es obligatorio"),
  password: Field.string()
    .min(8, "La contraseña debe ser de al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
});

export const registerFormSchema = Field.object({
  email: Field.string()
    .email("Debes ingresar un email valido")
    .required("El email es obligatorio"),
  password: Field.string()
    .min(8, "La contraseña debe ser de al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
});

export const forgetPasswordFormSchema = Field.object({
  email: Field.string()
    .email("Debes ingresar un email valido")
    .required("El email es obligatorio"),
});


/// El problema del optional esque no deja validar cuando es vacio, porque no se puede usar con el required, por eso lo cubre el when
/// tenemos que validar solo el undefined ya que el string vacio lo reconoce como un false
export const profileFormSchema = Field.object({
  firstName: Field.string().when({
    is: undefined,
    then: (schema) => schema,
    otherwise: (schema) => schema
      .matches(/^[aA-zZ\s]+$/, "Ingresa un nombre valido")
      .min(3, "Ingresa un bombre valido")
      .required("El nombre es obligatorio"),
  }),
  lastName: Field.string().when({
    is: undefined,
    then: (schema) => schema,
    otherwise: (schema) => schema
      .matches(/^[aA-zZ\s]+$/, "Ingresa un apellido valido")
      .min(3, "Ingresa un apellido valido")
      .required("El apellido es obligatorio"),
  }),
  phone: Field.string()
    .optional()
    .matches(/^\d+$/, {excludeEmptyString: true})
    .length(10, "Numero invalido, verificalo"),
});


export const updatePasswordFormSchema = Field.object({
  password: Field.string()
    .min(8, "La contraseña debe ser de al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
  newPassword: Field.string()
    .min(8, "La contraseña debe ser de al menos 8 caracteres")
    .required("La nueva contraseña es obligatoria"),
  newPasswordConfirmation: Field.string()
    .required("La confirmacion de la contraseña es obligatoria")
    .oneOf([Field.ref("newPassword"), null], "Las contraseñas deben coincidir"),
});