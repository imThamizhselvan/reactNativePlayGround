import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput, FlatList, StatusBar, ListView} from 'react-native';
import { Container, Header, Item, Input, Content, Icon, Card, CardItem, Body, Button, List, ListItem } from "native-base";
import * as firebase from 'firebase';
import styles from './styles.js';

var items = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Emre Can'
];

export default class MyDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: '',
      listViewData: items,
    };
  }

  addRow() {

  }

  deleteRow() {

  }

  showInfo() {

  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ marginTop: StatusBar.currentHeight }}/>
          <Content>
            <Item>
              <Input
                onChangeText={(newContact) => this.setState({newContact})}
                placeholder="Add Task"
              />
              <Button onPress={()=>this.addRow(this.state.newContact)}>
                <Icon name="add"/>
              </Button>
            </Item>
          </Content>
      </Container>
    );
  }
}
