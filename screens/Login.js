import React from "react";
import {Text, View, ActivityIndicator, Button, TextInput} from "react-native";

export default function Login() {
    return (
        <View style={{padding: 16}}>
            <Text style={{fontSize: 16}}>Login</Text>
            <TextInput placeholder="Username" />
            <Button title="Button" />
        </View>
    )
}
