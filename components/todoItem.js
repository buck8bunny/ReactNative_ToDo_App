import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TodoItem({ item, pressHandler }) {
    return (

        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={25} color="coral" />
                <Text  style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({

    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed',
        flexDirection: 'row',
        gap: 20,
        alignContent: 'center',

    },
    // itemText:{
    //     marginLeft:10,
    // }
});  