import {StyleSheet, Text} from 'react-native';
import StyleGeral from '../Estilos/style.js'; //Importa o arquivo style,js - (.. -> ele sobre 2 pastas acima - Componentes-> Meu-Primeiro-App ->(Estilo-> style.js))

let nv; //Poderia criar uma variavel para receber o valor da propriedade e referencia-la (Nivel: {nv})

export default function(props){ //Função - "props" refere á propriedade (valor) que o componente tem, pra poder utilizar depois
    nv = props.nivel; //nv acessa props.nivel
    return(
        <Text style={StyleGeral.textoInfo}>Curso: Desenvolvimento de Sistemas - {props.sobre} - Nível: {nv}</Text>
    )
}

/*const styleComp1 = StyleSheet.create({ //Estilização próprias dos componentes
    txt1:{
        color: '#f00',
        fontStyle: 'italic'
    }
})*/