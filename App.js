import { StatusBar } from 'expo-status-bar'; //Importação
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/Componente/Title';

export default function App() { //Função
  return (
    <View style={styles.container}>
      <Title></Title>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ //Estilo
  container: {
    flex: 1,
    backgroundColor: '#add8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
