import React, { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import UsersContext from "../context/userContext";

export default ({props, navigation}) => {

    const [user, setUser] = useState(props.routes.params ? props.routes.params : {}) 
    const {dispatch} = useContext(UsersContext )

    return (
        <View>
            <Text>name</Text>
            <TextInput
            style={style.input}
                onChangeText={name => (setUser({...user, name}))}
                placeholder="Digite o nome"
                value={user.name}
            />
            <Text>email</Text>
            <TextInput
            style={style.input}
                onChangeText={email => (setUser({...user, email}))}
                placeholder="Digite o Email"
                value={user.email}
            /> 
            <Text>url do Avatar</Text>
            <TextInput
            style={style.input}
                onChangeText={avatarUrl => (setUser({...user, avatarUrl}))}
                placeholder="Digite a URL"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() =>{
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        heiight: 40,
        borderColor: "red",
        border: 1,
        marginBottom: 20
    }
})