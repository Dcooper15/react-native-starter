import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text style={styles.nameStyle}>Hello my name is Dylan</Text>
    return <View>
        <Text style={styles.textStyle}>This is the components screen.</Text>
        {greeting}
    </View>
    
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;