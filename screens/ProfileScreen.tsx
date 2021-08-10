import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ProfileScreen() {
  return (
    <View style={styles.profile}>
        <Text>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    profile: {
    borderColor: 'black',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});