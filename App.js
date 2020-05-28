
import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ShowScreen from './src/screens/ShowScreen';
import React from 'react'


const navigator  = createStackNavigator({
  Search: SearchScreen,
  ShowScreen: ShowScreen
}, {
  initialRouteParams: "SearchScreen",
  defaultNavigationOptions:{
    title: "Business Search"
  }
})

 const App = createAppContainer(navigator)
export default function App(){
  return(  
              <App/>
          
          )
}
