import React, {Component} from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import styles from 'AwesomeProject/styles/index.js';

export default class appFolder extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Waking up in the morning
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Waking up in the morning
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Waking up in the morning
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
