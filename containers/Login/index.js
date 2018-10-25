import React, {Component} from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Container, Header, Content, Form, Item, Input, Label, Body, Title, Button, Text } from 'native-base';

export default class Login extends Component {

  constructor(props) {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin = () => {
    console.log('username', this.state.username + this.state.password);
    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
  // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    var user = firebase.auth().currentUser;
    console.log('user', user.email);
    this.props.navigation.navigate('Home');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <Container>
          <Header>
            <Body>
              <Title> Login </Title>
            </Body>
          </Header>
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>Username</Label>
                <Input
                  onChangeText={(username) => this.setState({username})}
                  value={this.state.username}
                />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  secureTextEntry={true}
                />
              </Item>
              <Button block style={{
                margin: 10,
              }}
              onPress={this.handleLogin}>
                <Text> Login </Text>
              </Button>
            </Form>
            <View style={{
              flex: 1,
              margin: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <View>
                <Button>
                  <Text> Forgot Password? </Text>
                </Button>
              </View>
              <View>
                <Button onPress={() => navigate('SignUp')}>
                  <Text> Create AN Account </Text>
                </Button>
              </View>
            </View>
            <View style={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <Text> OR
              </Text>
            </View>
            <Button block style={{
              margin: 10,
            }}>
              <Text> Login with Google </Text>
            </Button>
            <Button block style={{
              margin: 10,
            }}>
              <Text> Login with twitter </Text>
            </Button>
          </Content>
        </Container>
    );
  }
};
