import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

import RoutesDrawerMenu from './src/routes/RoutesApp'
import Home from './src/pages/Home'

export default function App () {
  return (
    <SafeAreaProvider>
      <StatusBar style='light' backgroundColor='#1A1F2B' />
      <NavigationContainer>
        <RoutesDrawerMenu />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
