import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from 'AwesomeProject/styles/index.js';

export default class Notification extends Component {
  static navigationOptions = {
    title: 'Notification',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome To Notification</Text>
      </View>
    );
  }
}
