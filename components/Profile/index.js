import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';
import styles from 'AwesomeProject/styles/index.js';

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('itemNo', 'nodid');
    const value = navigation.getParam('value', 'selvan');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome To Profile {id}</Text>
        <Text style={styles.welcome}>Welcome To Profile {value}</Text>

        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
        title="Update the title"
        onPress={() => this.props.navigation.setParams({value: 'Updated!'})}
      />
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
