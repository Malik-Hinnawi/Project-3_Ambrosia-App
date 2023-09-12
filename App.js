import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNaviagtor from './StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <StackNaviagtor />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
