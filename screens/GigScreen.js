import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Linking, StyleSheet, Platform } from 'react-native';
import { Content } from 'native-base';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'
import TimeAgo from 'react-native-timeago';

import metrics from '../utils/metrics';

export default GigScreen = (props) => {
  const {
    navigation: {
      goBack,
      state: {
        params: {
          gig
        }
      }
    }
  } = props;
  return (
    <Content style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => goBack()}
        >
          <Ionicons
            name="ios-arrow-round-back"
            size={40}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{gig.title}</Text>
        <TimeAgo time={gig.createdAt} style={styles.timeAgo}/>
      </View>
      <View style={styles.row}>
        <Image
          source={{
            uri: `https://robohash.org/${Math.random()}`
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{gig.contactName}</Text>
      </View>
      <Text style={styles.description}>{gig.description}</Text>
      <View style={styles.boxRow}>
        <View style={styles.box}>
          <Text style={styles.price}>₦ {gig.price}</Text>
          <Text style={styles.boxtitle}>Price</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.location}>{gig.location}</Text>
          <Text style={styles.boxtitle}>Location</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.5}
        onPress={() => Linking.openURL(`mailto: ${gig.contactEmail}`)}
      >
        <MaterialIcons
          name="email"
          color="black"
          style={{ marginLeft: 10 }}
          size={40}
        />
        <Text style={styles.contactText}>Contact by email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.5}
        onPress={() => Linking.openURL(`tel: ${gig.contactPhone}`)}
      >
        <FontAwesome
          name="phone-square"
          color="black"
          style={{ marginLeft: 12 }}
          size={41}
        />
        <Text style={styles.contactText}>Contact by phone</Text>
      </TouchableOpacity>
    </Content>
  )
}


const styles = StyleSheet.create({
  container: {
    width: metrics.width,
    height: metrics.height
  },
  header: {
    width: metrics.width,
    height: metrics.height * 0.1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    ...Platform.select({
      android: {
        marginTop: metrics.height * 0.02,
      }
    }),
  },
  backButton: {
    width: metrics.width * 0.1,
    height: metrics.height * 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 40,
    marginLeft: metrics.width * 0.03,
    fontWeight: 'bold'
  },
  timeAgo: {
    marginLeft: metrics.width * 0.02,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 15
  },
  row: {
    width: metrics.width,
    height: metrics.height * 0.1,
    flexDirection: 'row'
  },
  avatar: {
    width: metrics.width * 0.15,
    height: metrics.width * 0.15,
    borderRadius: 29,
    marginLeft: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
    marginTop: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 10,
    marginTop: 20
  },
  description: {
    color: 'grey',
    width: metrics.width * 0.98,
    fontSize: 17,
    marginHorizontal: metrics.width * 0.03,
    lineHeight: 25,
  },
  boxRow: {
    width: metrics.width * 0.92,
    alignSelf: 'center',
    height: metrics.height * 0.1,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  box: {
    width: metrics.width * 0.4,
    height: metrics.height * 0.1,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'grey',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  price: {
    color: '#2ed573',
    fontWeight: '900',
    marginTop: 10,
    fontSize: 19,
  },
  boxtitle: {
    fontSize: 15,
    color: 'grey'
  },
  location: {
    fontWeight: '900',
    marginTop: 10,
    fontSize: 19,
  },
  buttonContainer: {
    width: metrics.width * 0.92,
    height: metrics.height * 0.1,
    borderRadius: 10,
    marginTop: 10,
    borderColor: 'grey',
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    marginLeft: 10
  }
});
