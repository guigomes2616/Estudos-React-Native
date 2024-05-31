import { StatusBar } from 'expo-status-bar'; //Importação
import React from 'react';
import { StyleSheet, View, Text} from 'react-native'; //Importação dos Componentes usados, é preciso importar ao usar um novo componente
import Comp1 from './Componentes/Comp1' //Importação - Da um nome ao Componente (Comp1) e informa o caminho
import EstiloGeral from './Estilos/style.js'; 

export default function App() { //Função App que vai aparecer quando abrir o app

  return ( //Retornp
    //Uma View é o componente visual (vai mostrar na tela) - Como se fosse uma div
    //style={styles.container} -> acessa o objeto "styles" (Css)
    <View style={EstiloGeral.container}>
      <Text style={EstiloGeral.textoTitle}>Meu primeiro aplicatio - Guilherme Gomes</Text>
      <Comp1 sobre="React Native" nivel="Básico"/>
      <Text style={{color:'#000', fontSize:13}}>Data de criação do App: 31/05/2024</Text>
      <StatusBar style="auto" />
    </View>

  );
}

/*const styleApp = StyleSheet.create({ //estilização dos componentes próprios do App 
  container: { //Body
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt0:{ //Text 
    color: "#080"
  }

});*/
