import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Header() {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
     );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      height:80,
      paddingTop: 38,
      backgroundColor: 'coral',

    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
  
  
  });
 


