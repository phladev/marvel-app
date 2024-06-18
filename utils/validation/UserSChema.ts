import * as yup from 'yup'

export const UserSchema = yup.object({
  email: yup.string().email("Insira um Email Válido").required("Digite seu Email"),
  password: yup.string()
  .required('Senha é obrigatória')
  .min(8, 'A senha deve ter pelo menos 8 caracteres')
  .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
})