import { StatusBar } from 'expo-status-bar'; //Importação
import { StyleSheet, View } from 'react-native';
import Title from './src/Componente/Title';
import Form from './src/Componente/Form';

export default function App() { //Função

  return (
    <View style={styles.container}>

      <Title title="Meu primeiro formulário"></Title>

      <Form></Form>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ //Estilo
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
