import React from 'react';
import { Input } from 'native-base';

const AppInputField = ({ value, onChangeText, placeholder, keyboardType = 'default' }) => (
    <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        w={{
            base: '75%',
        }}
        m={4}
        variant='outline'
        keyboardType={keyboardType}
    />
);

export default AppInputField;
