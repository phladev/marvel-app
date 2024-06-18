import { auth } from "@/config/fireBase";
import { router } from "expo-router";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  // async function handleLogout() {
  //   try {
  //     await signOut(auth);
  //   } catch (error) {
  //     console.error('Erro ao fazer logout:', error);
  //   }
  //   finally {
  //     router.replace('/login')
  //   }
  // };

  return ( 
    <SafeAreaView>
      
    </SafeAreaView>
   );
}
 
export default HomePage;