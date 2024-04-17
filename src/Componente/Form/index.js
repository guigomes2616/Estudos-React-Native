import {Button, TextInput, View, Text } from "react-native-web";
import Resultado from "./Resultado";
import { useState } from "react";

export default function Form()
{
    const[height, setHeight] = useState(null);
    const[weight, setWeight] = useState(null);
    const[mensagem, setMensagem] = useState('Preencha o peso e a altura:');
    const[imc, setImc] = useState(null);
    const[buttonTitle, setButtonTitle] = useState('Calcular');

    function calcularImc()
    {
        return setImc((weight/(height*height)).toFixed(2));
    }

    function validarImc()
    {
        if(weight!=null && height!=null)
        {
            calcularImc();
            setHeight(null);
            setWeight(null);
            setMensagem('Seu IMC é igual:');
            setButtonTitle('Calcular novamente');
            return;
        }

        setImc(null);
        setButtonTitle('Calcular');
        setMensagem('-> Preencha o peso e altura <-');
    }

    return(
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput 
                placeholder="1.69" 
                keyboardType="numeric"
                onChangeText = {setHeight}
                value={height}></TextInput>

                <Text>Peso:</Text>
                <TextInput 
                placeholder="63.5 (KG)" 
                keyboardType="numeric"
                onChangeText = {setWeight}
                value={weight}></TextInput>

                <Button title={buttonTitle} onPress={() => validarImc()} />
            </View>

            <Resultado mensagem={mensagem} imc={imc}></Resultado>
        </View>

    );
}