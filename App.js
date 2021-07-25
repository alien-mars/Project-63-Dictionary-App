import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View >
      <StatusBar 
      backgroundColor = "#b3e6ff"  
      barStyle = "dark-content" 
      />
      <HomeScreen/>
    </View>
  );
}

