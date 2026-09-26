import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './Login/LoginScreen';
import HomeScreen from './Home/HomeScreen';

const SplashScreen = () => {
  const userExist =false;
  return (
 userExist ? (
  <HomeScreen/>
  ) : (
   <LoginScreen/>
  ))
}

export default SplashScreen

const styles = StyleSheet.create({})