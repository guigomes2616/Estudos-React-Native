import React from "react";
import {View, Text} from "react-native";

export default function Title(props){

    return(
        <View>
            <Text>{props.title}</Text>
        </View>
    );
}