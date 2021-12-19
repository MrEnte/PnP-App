import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Center, Text } from 'native-base';
import AppButton from '../../components/AppButton';

const CharacterDetailsScreen = () => {
    const selectedCharacter = useSelector((state => state.CharacterReducer.selectedCharacter));

    return (
        <Box
            flex={1}
            bg={{
                linearGradient: {
                    colors: ['lightBlue.300', 'violet.800'],
                    start: [0, 0],
                    end: [1, 0],
                },
            }}
        >
            <Center flex={5}>
                <Text>{selectedCharacter.name}</Text>
                <Text>{selectedCharacter.money}</Text>
                <Text>{selectedCharacter.health}</Text>
            </Center>
            <Center flex={1}>
                <Box>
                    <AppButton
                        label='Create Weapon'
                        onPress={() => console.error('create Weapon')}
                    />
                </Box>

            </Center>
        </Box>
    );
};

export default CharacterDetailsScreen;
