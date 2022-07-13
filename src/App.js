import React from "react";
import { Button } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Users from "./views/ListUsers";
import { Icon, Button } from "react-native-elements";
import { UserProvider } from "./context/userContext";

const Stack = createStackNavigator()

export default props => {
    return(
        <UserProvider>        
        <NavigationContainer>
            <Stack.Navigator
            initialRoutName="Users"
            screenOptions={screenOptions}>
                <Stack.Screen
                    Name="Users"
                    componeent={Users}
                    options={({navigation}) => {
                        return{
                            title: "Lista",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("UserForm")}
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white"/>}
                                />
                            )
                        }
                    }}
                />
                  <Stack.Screen
                    Name="UserForm"
                    componeent={UserForm}
                    options={{
                        title: "Cadastro de Usuarios"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </UserProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: 'blue'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}