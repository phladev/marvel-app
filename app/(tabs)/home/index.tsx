import ComicsPage from "@/components/comics-page/ComicsPage";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return ( 
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Veja essas HQs</Text>

      {/* Fazer component que mostra as HQs */}
      <ComicsPage />
    </SafeAreaView>
   );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#2C2C2C',
  },
  title: {
    fontSize: 32,
    color: '#ff0000'
  }
})
 
export default HomePage;