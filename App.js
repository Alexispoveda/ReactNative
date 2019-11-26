import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Device from 'expo-device';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
        <Header title={"Guess a number"}/>
        s<StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1
    }
});
