import React from 'react';
import { Button } from 'native-base';

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

export default AppButton;
