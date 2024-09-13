import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens

import Home from './src/screens/Home';
import Detalles from "./src/screens/Detalles";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen(){
    return(
        <HomeStack.Navigator      
         screenOptions={{
            headerStyle: {
              backgroundColor: '#1C1C1C', 
            },
            headerTintColor: '#E5E5E5',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}>
            <HomeStack.Screen name='Personajes' component={Home}/>
            <HomeStack.Screen name='Detalles' component={Detalles}/>
        </HomeStack.Navigator>
    )
}


export default function Navigation(){
    return(
        <NavigationContainer>
            <HomeStackScreen/>
        </NavigationContainer>
    );
}