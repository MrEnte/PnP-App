import React, { useState } from 'react';
import { Box, Center, FlatList, HStack, Text, VStack } from 'native-base';
import AppButton from '../../components/AppButton';
import { deleteAllCharacter, getAllCharacters } from '../../../database/character';
import { useFocusEffect } from '@react-navigation/native';
import { Spacer } from 'native-base/src/components/primitives/Flex/index';
import { TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeSelectedCharacter } from '../../actions/characterActions';

const CharacterList = ({ characters, onPress }) => (
    <FlatList
        data={characters}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
            <TouchableHighlight
                underlayColor='white'
                onPress={() => onPress(item)}
            >
                <Box
                    borderBottomWidth='1'
                    _dark={{
                        borderColor: 'gray.600',
                    }}
                    borderColor='coolGray.200'
                    pl='4'
                    pr='5'
                    py='2'
                >
                    <HStack space={3} justifyContent='space-between'>
                        <VStack>
                            <Text
                                _dark={{
                                    color: 'warmGray.50',
                                }}
                                color='coolGray.800'
                                bold
                            >
                                {item.name}
                            </Text>
                            <Text
                                color='coolGray.600'
                                _dark={{
                                    color: 'warmGray.200',
                                }}
                            >
                                {item.health}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Text
                            fontSize='xs'
                            _dark={{
                                color: 'warmGray.50',
                            }}
                            color='coolGray.800'
                            alignSelf='flex-start'
                        >
                            {item._id}
                        </Text>
                    </HStack>
                </Box>
            </TouchableHighlight>
        )}
    />
);

const HomeScreen = ({ navigation }) => {
    const [ characters, setCharacters ] = useState([]);
    const dispatch = useDispatch();

    useFocusEffect(
        React.useCallback(() => {
            setCharacters(getAllCharacters());
        }, []),
    );

    return (
        <>
            <Center flex={4}>
                {
                    characters.length
                        ? <CharacterList
                            characters={characters}
                            onPress={(character) => {
                                dispatch(changeSelectedCharacter(character));
                                navigation.navigate('Character Details');
                            }}
                        />
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
                        onPress={() => deleteAllCharacter(setCharacters)}
                    />
                </Box>
            </Center>
        </>

    );
};

export default HomeScreen;
