import Button from "@/components/button/Button";
import { auth } from "@/config/fireBase";
import { router } from "expo-router";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserPage = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
    finally {
      router.replace('/login')
    }
  };

  return ( 
    <SafeAreaView style={styles.container}>
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
        <View style={styles.userInfo}>
          {user?.photoURL ? 
            <Image style={styles.profilePic} source={{uri: user?.photoURL}}/> 
            : 
            <Image style={styles.profilePic} source={require('@/assets/images/welcome-bg.jpg')}
          />}
          <Text style={styles.userName}>{user?.email}</Text>
        </View>
        <View style={{width: 250}}>
          <Button onPress={handleLogout} text="SAIR" variant="primary"/>
        </View>
      </View>
    </SafeAreaView>
   );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#2C2C2C',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  userName: {
    fontSize: 16,
    color: '#ffff'
  },
})
 
export default UserPage;