import { StyleSheet } from "react-native";

const StyleGeral = StyleSheet.create({ //Cria uma função que vai ter um estilo geral para os componentes
    container:{
       flex: 1,
       backgroundColor: "#add8e6",
       alignItems: "center",
       justifyContent: "center" 
    },
    textoInfo:{
        color: '000',
        fontSize:14,
    },
    textoTitle:{
        color:'#f00',
        fontSize: 30
    }
})

export default StyleGeral;