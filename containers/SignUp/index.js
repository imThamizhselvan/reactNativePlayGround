import React, {Component} from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Container, Header, Content, Form, Item, Input, Label, Body, Title, Button, Text } from 'native-base';

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  handleSignUp = () => {
    console.log('test', firebase.app());
    console.log('email', this.state.email + this.state.password);
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
  // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    this.props.navigation.navigate('Home');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
          <Header>
            <Body>
              <Title> Sign up </Title>
            </Body>
          </Header>
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>Email</Label>
                <Input
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
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
              onPress={this.handleSignUp}
              >
                <Text> Sign Up </Text>
              </Button>
            </Form>
          </Content>
        </Container>
    );
  }
};
