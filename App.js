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
import { SafeAreaView, StatusBar, useColorScheme, } from 'react-native';
import Home from './src/containers/home/home';
import TodoApp from './src/containers/todo-app/todo-app';

import store from './src/store/store';
import { Provider } from 'react-redux';
import Weather from './src/containers/weather/weather';

const Drawer = createDrawerNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
    flex: 1
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen component={Home} name='home' />
            <Drawer.Screen component={TodoApp} name='todo' />
            <Drawer.Screen component={Weather} name='weather' />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
