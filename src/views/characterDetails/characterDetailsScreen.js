import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Center, Heading, Text } from 'native-base';
import AppButton from '../../components/AppButton';

const CharacterDetailsScreen = ({ navigation }) => {
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
                <Heading p={2} color='white'> Details </Heading>
                <Text>{selectedCharacter.name}</Text>
                <Text>{selectedCharacter.money}</Text>
                <Text>{selectedCharacter.health}</Text>
                <Heading p={2} pt={4} color='white'> Weapons </Heading>
                {
                    selectedCharacter.weapons && selectedCharacter.weapons.map(
                        (weapon) => <Text>{`${weapon.name} ${weapon.damage}`}</Text>,
                    )
                }
            </Center>
            <Center flex={1}>
                <Box>
                    <AppButton
                        label='Create Weapon'
                        onPress={() => navigation.navigate('Create Weapon')}
                    />
                </Box>

            </Center>
        </Box>
    );
};

export default CharacterDetailsScreen;
