import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator, StyleSheet, Platform } from 'react-native'
import { Left, Header, Content, Form, Item, Input, Label, Toast, Body, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Mutation } from 'react-apollo';
import { validateGig } from '../utils/validator';
import { createGig } from '../graphql/queries';

import metrics from '../utils/metrics';




export default class NewGig extends Component {
  state = {
    title: null,
    description: null,
    price: null,
    location: null,
    contactName: null,
    contactEmail: null,
    contactPhone: null
  }

  runValidator = createGigAction => {
    const errors = validateGig(this.state)

    if (errors.length > 0) {
      return Toast.show({
        type: 'danger',
        text: errors[0],
        duration: 5000
      })
    }
    createGigAction({
      variables: {
        ...this.state
      }
    }).then(() => console)
    .catch(error => error)
  }

  render() {
    return (
      <Mutation mutation={createGig}>
        {(createGigMutation, { data, loading, error }) => {
          if(error) {
            Toast.show({
              type: 'danger',
              text: error.message
            })
          }
          if(data) {
            Toast.show({
              type: 'success',
              text: 'Gig created successfully!'
            })
          }
          return(
            <View style={styles.container}>
            <Header
              androidStatusBarColor='#ffffff'
              styles={styles.header}
            >
              <Left>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Ionicons 
                    name="ios-arrow-round-back"
                    size={40}
                    color="black"
                  />
                </TouchableOpacity>
              </Left>
              <Body />
              <Right />
            </Header>

            <View style={styles.title}>
              <Text style={styles.titleText}>Create a new gig</Text>
            </View>
            <Text style={styles.description}>Fill in the details below to request a service</Text>
            <Content>
                  <Form>
                  <Item floatingLabel>
                      <Label>What's your name?</Label>
                      <Input
                        style={{ height: 80 }}
                        onChangeText={text => this.setState({ contactName: text })}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>What do you need?</Label>
                      <Input 
                        style={{ height: 80 }}
                        onChangeText={text => this.setState({ title: text })}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>Enter a brief description of the service you need</Label>
                      <Input 
                        style={{ height: 80 }}
                        onChangeText={text => this.setState({ description: text })}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>How much are you willing to pay?</Label>
                      <Input 
                        style={{ height: 80 }}
                        onChangeText={text => this.setState({ price: text })}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>What's the location for this gig?</Label>
                      <Input 
                        style={{ height: 80 }}
                        onChangeText={text => this.setState({ location: text })}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>Enter your phone number</Label>
                      <Input 
                        style={{ height: 80 }}
                        onChangeText={text => this.setState({ contactPhone: text })}
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>Enter your email address</Label>
                      <Input 
                        style={{ height: 80 }}
                        onChangeText={text => this.setState({ contactEmail: text })}
                      />
                    </Item>
                  </Form>
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    activeOpacity={0.5}
                    onPress={() => this.runValidator(createGigMutation)}
                  >
                    {
                      loading ? (
                        <ActivityIndicator
                          color="#ffffff"
                          size="large"
                        />
                      ) : (
                        <Text style={styles.buttonText}>Submit</Text>
                      )
                    }
                  </TouchableOpacity>
                </Content>
          </View>
        )
      }}
    </Mutation>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    width: metrics.width,
    height: metrics.height
  },

  header: {
    width: metrics.width,
    height: metrics.height * 0.1,
    ...Platform.select({
      android: {
        marginTop: metrics.height * 0.02,
      }
    }),
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButton: {
    width: metrics.width * 0.1,
    height: metrics.height * 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleText: {
    fontSize: 20,
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
    marginHorizontal: metrics.width * 0.037,
  },

  description2: {
    color: 'grey',
    width: metrics.width * 0.98,
    fontSize: 17,
    marginHorizontal: metrics.width * 0.037,
    marginTop: 20
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
    backgroundColor: '#e67e22',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18
  },

  itemStyle: {
    marginLeft: 20,
    marginTop: 10
  },

  itemStyleSelected: {

  }
})