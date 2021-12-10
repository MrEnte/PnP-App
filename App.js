import React from 'react';
import { Box, Center, NativeBaseProvider, Text } from 'native-base';
import HomeScreen from './views/home/homeScreen';

const App = () => {
    return (
        <NativeBaseProvider>
            <Center
                flex={1}
            >
                <HomeScreen/>
            </Center>
        </NativeBaseProvider>
    );
};

export default App;
