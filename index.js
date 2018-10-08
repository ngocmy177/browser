/** @format */
import React from 'react';
import {AppRegistry, View } from 'react-native';
import Search from './src/components/Search';
//Creat component
export const App = () => (
    <Search />
   );

AppRegistry.registerComponent('browser', () => App);
