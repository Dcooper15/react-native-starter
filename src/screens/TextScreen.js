import React, { useState }from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return <View>
        <Text>Enter Name:</Text>
            <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is {name}</Text>
            
            <Text>Create Password</Text>
            <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(passValue) => setPassword(passValue)}
            />
            {password.length > 5 || password.length === 0 ? null : <Text>Password must be greater than 5 characters.</Text>}
           </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;