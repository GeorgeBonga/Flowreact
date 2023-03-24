import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabMenu from '../../components/shared/Menus/TabMenu'
import DrawerMenu from '../../components/shared/Menus/DrawerMenu'

import Home from '../../pages/Home'
import Settings from '../../pages/Settings'
import RegistrationForm from '../../pages/SignUp'
import SecretChat from '../../pages/SecretChat'

const Tab = createBottomTabNavigator()

function RoutesTabMenu () {
  return (
    <Tab.Navigator
      initialRouteName='Home'
     
      tabBar={props => <TabMenu {...props} />}
    >
      <Tab.Screen name='Home'   component={Home} />
      <Tab.Screen name='Settings' options={{headerShown: false}} component={Settings} />
      <Tab.Screen name='SignUp' options={{headerShown: false}}  component={RegistrationForm} />
      <Tab.Screen name='SecretChat' options={{headerShown: false}}  component={SecretChat} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator()

export default function RoutesDrawerMenu () {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: 300 }}
      overlayColor='red'
      drawerContent={props => <DrawerMenu {...props} />}
    >
      <Drawer.Screen
        name='Health App'
        component={RoutesTabMenu}
        // options={{headerShown: false}}
      />
    </Drawer.Navigator>
  )
}


// const Stack = createNativeStackNavigator();

// function RoutesStacks (){
//   <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Home"
//       component={Home}
//       options={{ headerShown: false }}
//     />
//     {/* <Stack.Screen name="Profile" component={Profile} />
//     <Stack.Screen name="Settings" component={Settings} /> */}
//   </Stack.Navigator>
// </NavigationContainer>
// }