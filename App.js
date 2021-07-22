/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {SafeAreaView,StatusBar,useColorScheme,} from 'react-native';
import Home from './src/containers/home/home';

const Drawer = createDrawerNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
    flex:1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen component={Home} name='home' />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
