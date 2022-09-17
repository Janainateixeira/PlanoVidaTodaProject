import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import licao1Etic from './assets/licao1Etic.png';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={licao1Etic} defaultSource={licao1Etic} style={styles.eticaLogo}></Image>
        <Estacio>Faça o que é certo, não o que é facil.</Estacio>
        <Estacio>O nome disso é ÉTICA</Estacio>
        <Text style={styles.numberText}>01</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appName: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },

  numberText: {
    color: '#1c1c1c1',
    fontSize: 150,
    lineHeight: 47,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eticaLogo: {
    width:300,
    height:200,
  },

  
});
