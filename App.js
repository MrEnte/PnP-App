import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/home/homeScreen';
import configureStore from './store/configureStore';
import { Provider, useSelector } from 'react-redux';
import CreateCharacterScreen from './src/views/createCharacter/createCharacterScreen';
import CharacterDetailsScreen from './src/views/characterDetails/characterDetailsScreen';

const Stack = createNativeStackNavigator();
const store = configureStore()
const config = {
    dependencies: {
        'linear-gradient': require('react-native-linear-gradient').default,
    },
};

const Navigation = () => {
    const selectedCharacter = useSelector((state) => state.CharacterReducer.selectedCharacter);

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Create Character' component={CreateCharacterScreen}/>
            <Stack.Screen name='Character Details' component={CharacterDetailsScreen} options={{ title: `Selected: ${selectedCharacter?.name}` }}/>
        </Stack.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <NativeBaseProvider config={config}>
                    <Navigation />
                </NativeBaseProvider>
            </Provider>
        </NavigationContainer>

    );
};

export default App;
