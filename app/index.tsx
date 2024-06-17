import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image,  StyleSheet, Text, View } from "react-native";

export default function WelcomePage() {
  return ( 
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('@/assets/images/welcome-bg.jpg')}/>
      </View>

      <View style={styles.loginContainer}>
        <Text>AAAAAAAAA</Text>
      </View>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    width: '100%',
    height: '100%'
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
    flex: 2,
    backgroundColor: '#2C2C2C'
  }
})
 