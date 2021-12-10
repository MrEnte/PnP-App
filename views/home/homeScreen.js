import React, { useState } from 'react';
import { Box, Button, Center, Text, View } from 'native-base';

const AppButton = ({ label, onPress }) => (
    <Button
        px='10'
        m='2'
        size='sm'
        borderRadius='md'
        bgColor='red.500'
        onPress={onPress}
    >
        {label}
    </Button>
);

const HomeScreen = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Center flex={5}>
                <Text>
                    {`Counter: ${count}`}
                </Text>
            </Center>
            <Center flex={1}>
                <Box>
                    <AppButton
                        label='Add Character'
                        onPress={() => setCount(count + 1)}
                    />
                    <AppButton
                        label='Delete Characters'
                        onPress={() => setCount(count - 1)}
                    />
                </Box>
            </Center>
        </>

    );
};

export default HomeScreen;
