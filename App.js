import { StatusBar } from 'expo-status-bar'; //Importação
import React from 'react';
import { StyleSheet, View, Text} from 'react-native'; //Importação dos Componentes usados, é preciso importar ao usar um novo componente
import Comp1 from './Componentes/Comp1' //Importação - Da um nome ao Componente (Comp1) e informa o caminho
import Caixas from './Componentes/Caixas';
import StyleGeral from './Estilos/style'; 

// const fexibir = (vp1)=>
// {
//   if(vp1)
//   {
//     return (<Text>Curso de React-Native</Text>)
//   }
//   else
//   {
//     return(<Text>- - -</Text>)
//   }
// }

export default function App() { //Função App que vai aparecer quando abrir o app
  
  let vexibir=true

  return ( //Retorno
    //Uma View é o componente visual (vai mostrar na tela) - Como se fosse uma div
    //style={styles.container} -> acessa o objeto "styles" (Css)
    <View style={StyleGeral.container}>
     <Caixas exibir={vexibir}/>
        <Text style={StyleGeral.textoTitle}>Meu primeiro aplicativo - Guilherme Gomes</Text>
        <Text style={{color:'#000', fontSize:13}}>Data de criação do App: 31/05/2024</Text>
        {vexibir?<Text>É um prazer!</Text>: <Text>- - -</Text>}
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