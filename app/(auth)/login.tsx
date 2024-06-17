import * as yup from 'yup'
import Button from "@/components/button/Button";
import {yupResolver} from '@hookform/resolvers/yup'
import { Controller, useForm } from "react-hook-form";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from 'expo-router';

interface DataInfo {
  email: string,
  password: string
}

const schema = yup.object({
  email: yup.string().email("Insira um Email Válido").required("Digite seu Email"),
  password: yup.string()
  .required('Senha é obrigatória')
  .min(8, 'A senha deve ter pelo menos 8 caracteres')
  .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
})

const LoginPage = () => {
  const {control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })

  function handleLogIn(data: DataInfo) {
    console.log(data)
  }

  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.loginPage}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('@/assets/images/marvel-logo.png')}/>
        </View>

        <View style={styles.formContainer}>

          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <Controller 
              control={control}
              name="email"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput 
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value} 
                placeholder="Digite Seu Email"
                autoComplete="email"
                inputMode="email"
              />
              )}
            />
            {errors.email && <Text style={styles.labelError}>{errors.email.message}</Text>}

            <Text style={styles.label}>Senha</Text>
            <Controller 
              control={control}
              name="password"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput 
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value} 
                placeholder="Digite Sua Senha"
                secureTextEntry={true}
              />
              )}
            />
            {errors.password && <Text style={styles.labelError}>{errors.password.message}</Text>}
          </View>

          <Button text="Entrar" variant="primary" onPress={handleSubmit(handleLogIn)}/>

          <Text style={styles.text}>Não possui uma conta? <Link style={styles.link} href='/register'>Registre-se aqui</Link></Text>
        </View>
      </View>
    </SafeAreaView>
   );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#2C2C2C',
  },
  loginPage: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    width: 250
  },
  formContainer: {
    display: 'flex',
    gap: 16,
    width: 280
  },
  form: {
    display: 'flex',
    gap: 8
  },
  imageContainer: {
    width: 200,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  label: {
    fontSize: 20,
    color: '#fff'
  },
  labelError: {
    alignSelf: 'flex-start',
    color: '#ff0000'
  },
  input: {
    width: '100%',

    padding: 10,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    color: '#fff'
  },
  text: {
    fontSize: 16,
    color: '#fff'
  },
  link: {
    color: '#ff0000',
    textDecorationLine: 'underline'
  }
})
 
export default LoginPage;