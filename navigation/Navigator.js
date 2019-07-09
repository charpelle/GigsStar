import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '../screens/HomeScreen';
import Gig from '../screens/GigScreen';
import NewGig from '../screens/NewGig';

export default createAppContainer(createStackNavigator({
  Home,
  NewGig,
 
  Gig
}, {
  headerMode: 'none'
}))