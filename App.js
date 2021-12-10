import React from 'react';
import { Box, NativeBaseProvider } from 'native-base';


const App = () => {
    return (
        <NativeBaseProvider>
            <Box>Hello Leonie!</Box>
        </NativeBaseProvider>
    );
};

export default App;
