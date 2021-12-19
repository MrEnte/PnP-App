import React, { useState } from 'react';
import { Center, Text } from 'native-base';
import AppButton from '../../components/AppButton';
import { createCharacter } from '../../../database/character';
import AppInputField from '../../components/AppInputField';

const CreateCharacterScreen = ({ navigation }) => {
    const [characterName, setCharacterName] = useState('');
    const [characterHealth, setCharacterHealth] = useState('');
    const [characterMoney, setCharacterMoney] = useState('');

    const handlePress = () => {
        createCharacter({
            characterName,
            characterHealth: parseInt(characterHealth),
            characterMoney: parseInt(characterMoney),
        });
        navigation.goBack();
    };

    return (
        <>
            <Center flex={1}>
                <Text>
                    Create Character!
                </Text>
            </Center>
            <Center flex={5}>
                <AppInputField
                    value={characterName}
                    onChangeText={(value) => setCharacterName(value)}
                    placeholder='Name'
                />
                <AppInputField
                    value={characterHealth}
                    onChangeText={(value) => setCharacterHealth(value)}
                    placeholder='Health'
                    keyboardType='number-pad'
                />
                <AppInputField
                    value={characterMoney}
                    onChangeText={(value) => setCharacterMoney(value)}
                    placeholder='Money'
                    keyboardType='number-pad'
                />
            </Center>
            <Center flex={1}>
                <AppButton
                    label='Create'
                    onPress={() => handlePress()}
                />
            </Center>
        </>
    );
};

export default CreateCharacterScreen;
