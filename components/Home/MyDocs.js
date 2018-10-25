import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput, FlatList, StatusBar} from 'react-native';
import { Container, Header, Item, Input, Content, Icon, Card, CardItem, Body, Button, List, ListItem } from "native-base";
import * as firebase from 'firebase';
import styles from './styles.js';

let data = ["brush", "bath"];
export default class MyDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listViewData: data,
      task: '',
    };
    // firebase.database().ref('todo/').set({
    //   task: "asrasf",
    // });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ marginTop: StatusBar.currentHeight }}/>
          <Item>
            <Input
              placeholder="Add Task"
            />
            <Button>
              <Icon name="add"/>
            </Button>
          </Item>
        <Content>
          <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) =>
              <ListItem>
                <Text>{item.key}</Text>
              </ListItem>
            }
            renderLeftHiddenRow={data =>
              <Button full>
                <Icon name="information-circle" />
              </Button>
            }
            renderRightHiddenRow={data =>
              <Button full danger>
                <Icon name="trash" />
              </Button>
            }
            leftOpenValue={-75}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }
}
