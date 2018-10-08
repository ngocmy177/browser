import React, { Component } from 'react';
import { Container, Header, Content, Footer } from 'native-base';
import { View, Text } from 'react-native';
export default class ContentExample extends Component {
  render() {
    return (
        <Container>
            <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        </Container>
        
    );
  }
}