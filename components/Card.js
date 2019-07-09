import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import TimeAgo from 'react-native-timeago'
import { withNavigation } from 'react-navigation';
import styled from 'styled-components'

import metrics from '../utils/metrics';

const Card = ({ gig, navigation }) => {
  return (
    <Container
      activeOpacity={0.7}
      onPress={() => navigation.navigate('Gig', { gig })}
    >
      <View>
        <CardTop>
          <JobTitle>{gig.title}</JobTitle>
          <JobImage source={{ uri: `https://robohash.org/${Math.random()}` }}/>
        </CardTop>
        <JobLocation>{gig.location.toUpperCase()}</JobLocation>
        <CardBottom>
          <JobPrice>$ {gig.price}</JobPrice>
          <TimeAgo 
            time={gig.createdAt}
            style={{
              marginLeft: metrics.width * 0.65,
              position: 'absolute',
              top:15
            }}
          />
        </CardBottom>
      </View>
    </Container>
  )
}

export default withNavigation(Card);

const Container = styled.TouchableOpacity`
  width: ${metrics.width * 0.95};
  height: ${metrics.height * 0.2};
  background: white;
  align-self: center;
  border-radius: 10px;
  margin-bottom: 10px;
`

const CardTop = styled.View`
  flex-direction: row;
  width: ${metrics.width * 0.95};
  align-self: center;
  height: ${metrics.height * 0.1};
  margin-top: 10px;
`

const JobTitle = styled.Text`
  font-weight: bold;
  font-size: 20;
  width: ${metrics.width * 0.7};
`

const JobImage = styled.Image`
  width: ${metrics.width * 0.15};
  height: ${metrics.width * 0.15};
  border-radius: 29px;
  margin-left: 20px;
`

const JobLocation = styled.Text`
  font-weight: bold;
  color: grey;
  margin-left: 10px
`

const CardBottom = styled.View`
  flex-direction: row;
  width: ${metrics.width * 0.9};
  margin-left: 10;
`

const JobPrice = styled.Text`
  color: #2ed573;
  font-weight: 900;
  margin-top: 10px;
  font-size: 19;
`
