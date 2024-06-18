import Button from "@/components/button/Button";
import {yupResolver} from '@hookform/resolvers/yup'
import { Controller, useForm } from "react-hook-form";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from 'expo-router';
import { UserSchema } from "@/utils/validation/UserSChema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/fireBase";
import { useState } from "react";

interface DataInfo {
  email: string,
  password: string
}

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const {control, handleSubmit, reset, formState: {errors} } = useForm({
    resolver: yupResolver(UserSchema)
  })

async function handleRegister({email, password}: DataInfo) {
    setIsLoading(true)
    setError('')
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Usuário registrado com sucesso
    } catch (e: any) {
      handleError(e.code);
    } finally {
      setIsLoading(false);
      alert('Conta Criada Com sucesso!')
    }
    reset()
  }

  const handleError = (errorCode: string) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        setError('Este e-mail já está em uso. Tente outro.');
        break;
      default:
        setError('Ocorreu um erro inesperado. Por favor, tente novamente.');
        break;
    }
  };

  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.registerPage}>
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

          <Button disabled={isLoading} text="Registrar" variant="primary" onPress={handleSubmit(handleRegister)}/>

          <Text style={styles.text}>Já possui uma conta? <Link style={styles.link} href='/login'>Entre aqui</Link></Text>
          {error && <Text style={{color: '#ff0000', alignSelf: 'center'}}>{error}</Text>}
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
  registerPage: {
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
 
export default RegisterPage;