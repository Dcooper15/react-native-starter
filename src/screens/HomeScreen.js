import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View><Text style={styles.text}>Hello Dylan</Text>
  <Button 
    onPress={() => navigation.navigate('Components')}
    title="Go to components demo" 
    />
    <Button onPress={() => navigation.navigate('List')}
      title="Go to list demo"
    />
    <Button onPress={() => navigation.navigate('Image')} 
      title="Go to image screen"
    />
     <Button onPress={() => navigation.navigate('Counter')} 
      title="Go to counter demo"
    />
     <Button onPress={() => navigation.navigate('Color')} 
      title="Go to Color demo"
    />
     <Button onPress={() => navigation.navigate('Square')} 
      title="Go to Square demo"
    />
      <Button onPress={() => navigation.navigate('Text')} 
      title="Go to Text demo"
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25
  }
});

export default HomeScreen;

