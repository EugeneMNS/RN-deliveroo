import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </Stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
