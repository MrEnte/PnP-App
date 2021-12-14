import React from 'react';
import { useSelector } from 'react-redux';
import AppInputField from '../../components/AppInputField';
import { Center } from 'native-base';

const CharacterDetailsScreen = () => {
    const selectedCharacter = useSelector((state => state.CharacterReducer.selectedCharacter));

    return (
        <>
            <Center fle={1}>
                <AppInputField
                    value={selectedCharacter.name}
                />
                <AppInputField
                    value={selectedCharacter.health.toString()}
                    keyboardType='number-pad'
                />
            </Center>
        </>
    );
};

export default CharacterDetailsScreen;
