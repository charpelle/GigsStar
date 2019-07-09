import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styled from 'styled-components';
import ActionButton from 'react-native-action-button'

import ListComponent from '../components/ListComponent';
import metrics from '../utils/metrics';

export default class HomeScreen extends Component {
  renderHeader = ({ goToPage, activeTab }) => {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, activeTab === 0 ? styles.orange : styles.white]}
          activeOpacity={0.6}
          onPress={() => goToPage(0)}
        >
          <Text style={activeTab === 1 ? styles.whiteText : styles.blackText} >All Gigs</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={[styles.button, activeTab === 0 ? styles.white : styles.orange]}
            activeOpacity={0.6}
            onPress={() => goToPage(1)}
          >
            <Text style={activeTab === 1 ? styles.blackText : styles.whiteText}>Filter by location</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, activeTab === 0 ? styles.white : styles.orange]}
            activeOpacity={0.6}
            onPress={() => goToPage(1)}
          >
            <Text style={activeTab === 1 ? styles.blackText : styles.whiteText}>Filter by location</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (
      <Container>
        <Header>
          <Logo source={require('../assets/logo.png')} />
          <LogoText style={{ fontFamily: 'raft' }}>Gigs</LogoText>
        </Header>
        <ScrollableTabView renderTabBar={props => this.renderHeader({ ...props })}>
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
  width: ${metrics.width * 0.10};
  height: ${metrics.width * 0.10};
  border-radius: 20px;
  margin-top: 15px;
`

const LogoText = styled.Text`
  /* font-family: raft; */
  font-size: 50;
  margin-left: 10;
  margin-top: 12
`

const styles = StyleSheet.create({
  orange: {
    backgroundColor: '#e67e22',
  },
  white: {
    backgroundColor: '#ffffff'
  },
  blackText: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: '900'
  },
  whiteText: {
    fontSize: 15,
    fontWeight: '900'
  },
  row: {
    flexDirection: 'row',
    width: metrics.width * 0.09,
    height: metrics.height * 0.1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: metrics.width * 0.45,
    height: metrics.height * 0.07,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
})