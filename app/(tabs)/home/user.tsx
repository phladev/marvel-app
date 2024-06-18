import { auth } from "@/config/fireBase";
import { router } from "expo-router";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
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
      <Text>User</Text>
      <TouchableOpacity onPress={handleLogout}><Text>LOGOUT</Text></TouchableOpacity>
    </SafeAreaView>
   );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#2C2C2C',
  }
})
 
export default UserPage;