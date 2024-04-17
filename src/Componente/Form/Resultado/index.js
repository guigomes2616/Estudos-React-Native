import {View, Text} from "react-native-web";
import React from "react";

export default function Resultado(props)
{
    return(
        <View>
            <Text>{props.mensagem}</Text>
            <Text>{props.imc}</Text>
        </View>
    );
}