import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/home/homeScreen';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import CreateCharacterScreen from './src/views/createCharacter/createCharacterScreen';

const Stack = createNativeStackNavigator();
const store = configureStore()

const App = () => {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <NativeBaseProvider>
                    <Stack.Navigator initialRouteName='Home'>
                        <Stack.Screen name='Home' component={HomeScreen}/>
                        <Stack.Screen name='Create Character' component={CreateCharacterScreen}/>
                    </Stack.Navigator>
                </NativeBaseProvider>
            </Provider>
        </NavigationContainer>

    );
};

export default App;
