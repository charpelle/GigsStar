import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styled from 'styled-components';
import ActionButton from 'react-native-action-button'

import ListComponent from '../components/ListComponent';
import metrics from '../utils/metrics';

export default function HomeScreen() {
  return (
    <Container>
      <Header>
        <Logo />
        <LogoText>Gigs</LogoText>
      </Header>
      <ScrollableTabView>
        <ListComponent 
          tabLabel={'allGigs'}
        />
        <ListComponent 
          tabLabel={'locationFilter'}
        />
      </ScrollableTabView>
      <ActionButton
        buttonColor="#e67e22"
        onPress={() => this.props.navigation.navigate('NewGig')}
      >

      </ActionButton>
    </Container>
  );
}

const Container = styled.View`
  width: ${metrics.width};
  height: ${metrics.height};
  background: #e2e2e2
`

const Header = styled.View`
  width: ${metrics.width};
  height: ${metrics.height * 0.1};
  background: white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */ // android
`

const Logo = styled.Image`
  width: ${metrics.width};
  height: ${metrics.height * 0.1};
  background: white;
`

const LogoText = styled.Text`
  /* font-family: raft; */
  font-size: 50;
  margin-left: 10;
  margin-top: 12
`