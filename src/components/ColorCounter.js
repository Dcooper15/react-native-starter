import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ( {color} ) => {
    return <View>
            <Text>{color}</Text>
            <Button title={`increase ${color}`} />
            <Button title={`decrease ${color}`} />
            </View>
};

const styles = StyleSheet.create({});

export default ColorCounter;