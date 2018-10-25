/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { config } from './static/config';
import AllDocsPage from './components/Home';
import ProfilePage from './components/Profile';
import NotificationPage from './components/Notification';
import SearchPage from './components/Search';
import SignUp from './containers/SignUp';
import StarredDocsPage from './components/StarredDocs';
import Bitcoin from './containers/Bitcoin';
import Login from './containers/Login';

const AllDocsStack = createStackNavigator (
  {
    Home: AllDocsPage,
    Profile: ProfilePage,
    SignUp: SignUp,
  },
  {
    initialRouteName: 'Home',
  },
  {
    headerMode: 'none',
  }
);

const BottomStack = createBottomTabNavigator(
  {
    Home: AllDocsPage,
    StarredDocs: StarredDocsPage,
    Notification: NotificationPage,
    Profile: ProfilePage,
    Bitcoin: Bitcoin,
  },
  {
    initialRouteName: 'StarredDocs',
  }
);

const AuthStack = createStackNavigator({ Login: Login, SignUp: SignUp}, {headerMode: 'none'});


const RootStack = createSwitchNavigator(
  {
    BottomStack: BottomStack,
    AuthStack: AuthStack,
  },
  {
    initialRouteName: 'AuthStack',
  }
);

export default class App extends React.Component {
  constructor() {
    super();
    firebase.initializeApp(config);
  }

  render() {
    console.log('firebase', firebase.app());  // "[DEFAULT]"
    return <RootStack />;
  }
}
