import 'react-native-gesture-handler';
import React from 'react';
import { Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TotalStats from './screens/Totalstats'
import CountryStats from './screens/Countrystats'
import WorldMap from './screens/WorldMapsScreen'
import { createStackNavigator } from '@react-navigation/stack';


const Stack1=createStackNavigator()
const Tab = createBottomTabNavigator();
export default class App extends React.Component
{
  render()
  {
    return (
      <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Overall stats') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Country stats') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          else
          {
            if(focused)
            {
              return <Image source={require('./assets/world_red.png')}  style={{ width:30,
                height:30, resizeMode:'contain',}}/>
            }
            else 
            return <Image source={require('./assets/world.png')}  style={{ width:30,
              height:30, resizeMode:'contain',}}/>
 
          }
        },
      })}
        tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Overall stats" component={TotalStatsStack} />
        <Tab.Screen name="Country stats" component={CountryStatsStack} />
        <Tab.Screen name="World Map" component={WorldMapStatsStack}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
}

const TotalStatsStack =(props)=>{
  return( 
      <Stack1.Navigator>
        <Stack1.Screen name="Overall stats" component={TotalStats} options={{title:"Overall stats"}} />
      </Stack1.Navigator>

  )
}

const CountryStatsStack =(props)=>{
  return(
      <Stack1.Navigator>
        <Stack1.Screen name="Country stats" component={CountryStats} options={{title:"Country stats"}} />
      </Stack1.Navigator>
  )
}

const WorldMapStatsStack = props=>{
  return(
    <Stack1.Navigator>
    <Stack1.Screen name="World map" component={WorldMap} options={{title:"World map"}} />
   </Stack1.Navigator>
  )
}


