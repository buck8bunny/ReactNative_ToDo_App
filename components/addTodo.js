import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    const handlePress = () => {
        submitHandler(text);
        if (text.length > 2) {
            setText(''); 
            Keyboard.dismiss(); 
        }
    };

    return (
        <View>
            <TextInput
                placeholder='new todo...'
                onChangeText={changeHandler}
                value={text}
                style={styles.input}
            />
            <Button title='Add Todo' onPress={handlePress} color='coral' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
