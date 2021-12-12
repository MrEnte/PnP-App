import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Text } from 'native-base';
import AppButton from '../../components/AppButton';
import { deleteAllCharacter, getAllCharacters } from '../../../database/character';
import { useFocusEffect } from '@react-navigation/native';

const CharacterItem = ({ id, name }) => {
    return (
        <Box>
            <Text>
                {`ID: ${id}`}
            </Text>
            <Text>
                {`Name: ${name}`}
            </Text>
        </Box>
    );
};

const HomeScreen = ({ navigation }) => {
    const [count, setCount] = useState(0);
    const [characters, setCharacters] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            setCharacters(getAllCharacters());
        }, []),
    );

    return (
        <>
            <Center flex={1}>
                <Text>
                    {`Counter: ${count}`}
                </Text>
            </Center>
            <Center flex={4}>
                {
                    characters.length
                        ? characters.map((character) => <CharacterItem id={character._id} name={character.name}/>)
                        : <Text>No Characters!</Text>
                }
            </Center>
            <Center flex={1}>
                <Box>
                    <AppButton
                        label='Add Character'
                        onPress={() => navigation.navigate('Create Character')}
                    />
                    <AppButton
                        label='Delete Characters'
                        onPress={() => deleteAllCharacter()}
                    />
                </Box>
            </Center>
        </>

    );
};

export default HomeScreen;
