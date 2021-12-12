import React, { useEffect, useState } from 'react';
import { Center, Input, Text } from 'native-base';
import AppButton from '../../components/AppButton';
import characterRealm, { CHARACTER_SCHEMA, createCharacter } from '../../../database/character';

const CreateCharacterScreen = ({ navigator }) => {
    const [characterName, setCharacterName] = useState('');

    const handlePress = () => createCharacter({ characterName });

    return (
        <>
            <Center flex={1}>
                <Text>
                    Create Character!
                </Text>
            </Center>
            <Center flex={5}>
                <Input
                    value={characterName}
                    onChangeText={(text) => setCharacterName(text)}
                    variant='outline'
                    placeholder='Name'
                    w={{
                        base: '75%',
                    }}
                />
                <AppButton
                    label='Create'
                    onPress={() => handlePress()}
                />
            </Center>
        </>
    );
};

export default CreateCharacterScreen;
