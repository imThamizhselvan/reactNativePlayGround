import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Container, Header, Tab, Body, Title, Tabs, TabHeading, Icon, Text } from 'native-base';
import * as Actions from './actions.js';
import styles from 'AwesomeProject/styles/index.js';
import MyDocs from './MyDocs';
import SharedDocs from './SharedDocs';
import AppFolder from './AppFolder';

export default class Home extends Component {
  render() {
    console.log("hit");
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Text>To Do</Text></TabHeading>}>
            <MyDocs />
          </Tab>
          <Tab heading={ <TabHeading><Text>Notes</Text></TabHeading>}>
            <SharedDocs />
          </Tab>
          <Tab heading={ <TabHeading><Text>Goals</Text></TabHeading>}>
            <AppFolder />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
