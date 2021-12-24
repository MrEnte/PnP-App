import React, { useState } from 'react';
import { Center, Text } from 'native-base';
import AppButton from '../../components/AppButton';
import AppInputField from '../../components/AppInputField';
import { createWeapon } from '../../../database/character';
import { useSelector } from 'react-redux';

const CreateWeaponScreen = ({ navigation }) => {
    const [weaponName, setWeaponName] = useState('');
    const [weaponDamage, setWeaponDamage] = useState('');
    const selectedCharacter = useSelector((state) => state.CharacterReducer.selectedCharacter);

    const handlePress = () => {
        createWeapon({
            weaponName,
            weaponDamage,
            selectedCharacterId: selectedCharacter._id,
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
                    value={weaponName}
                    onChangeText={(value) => setWeaponName(value)}
                    placeholder='Name'
                />
                <AppInputField
                    value={weaponDamage}
                    onChangeText={(value) => setWeaponDamage(value)}
                    placeholder='Damage'
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

export default CreateWeaponScreen;
