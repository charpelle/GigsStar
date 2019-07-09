import React from 'react'
import { View, FlatList, ActivityIndicator, Text } from 'react-native'
import { Item, Input } from 'native-base';
import styled from 'styled-components';
import { graphql, Query } from 'react-apollo';

import Card from './Card';
import { getGigsQuery } from '../graphql/queries'
import metrics from '../utils/metrics';

const ListComponent = graphql(getGigsQuery)(props => {
  return (
    <Query query={getGigsQuery} variables={{ location: '' }}>
      {({ data, loading, error, fetchMore }) => {
        if (loading) return <ActivityIndicator size="large" color="#e67e22" />
        if (error) {
          return <Text>{error}</Text>
        }
        if (data) {
          return (
            <View>
              {
                props.tabLabel === 'locationFilter' ? (
                  <Item rounded style={{
                    width: metrics.width * 0.95,
                    alignSelf: 'center',
                    borderRadius: 10,
                    marginBottom: 10
                  }}>
                    <Input 
                      placeholder='Enter Location'
                      onChangeText={text => fetchMore({
                        variables: {
                          location: text
                        },
                        updateQuery: (prev, { fetchMoreResult}) => {
                          return fetchMoreResult
                        }
                      })}
                    />
                  </Item>
                ) : null
              }
              <FlatList 
                data={data.getAllGigs.gigs || []}
                renderItem={({ item, index }) => (
                  <Card key={index} gig={item} />
                )}
                onEndReachedThreshold={1}
                keyExtractor={(i, x) => x.toString()}
              />
            </View>
          )
        }
      }}
    </Query>
    
  )
})

export default ListComponent
