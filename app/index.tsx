import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "@/components/button/Button";
import { router } from "expo-router";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/fireBase";

export default function WelcomePage() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    try {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(!user) {
          return
        }
        setUser(user);
      });
      
      return unsubscribe
    } catch (error) {
      console.log(error)
    }
  }, []);

  if(user) {
    router.push('/home')
  }

  function handleNavigate() {
    router.replace('/login') 
  }

  return ( 
    <View style={styles.container}>
        <StatusBar style='light'/>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('@/assets/images/welcome-bg.jpg')}/>
        </View>

        <View style={styles.loginContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.text}>Seja bem vindo ao Marvel App</Text>
            <Text style={styles.textSm}>Aqui você vai poder ficar sabendo de tudo sobre essas incríveis HQs!</Text>
            <Button text="Vamos Começar!" variant="primary" onPress={handleNavigate}/>
          </View>
        </View>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 3,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2C2C2C',
    paddingTop: 20
  },
  welcomeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  },
  textSm: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  }
})
 