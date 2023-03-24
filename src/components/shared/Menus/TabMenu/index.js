import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import * as S from './styles'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import NavButton from './NavButton'
import { useNavigation } from "@react-navigation/native";

export default function TabMenu() {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row", backgroundColor: '#1A1F2B',justifyContent:'space-between',padding:20}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{ alignItems: "center" }}>
        <FontAwesome name='calendar' size={24} color="#44C2E4" />
        <Text style={{color:'#FFFFFF'}}>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('Settings')} style={{ alignItems: "center" }}>
        <Entypo name='list' size={24} color="#44C2E4" />
        <Text style={{color:'#FFFFFF'}}>Insight</Text>
      </TouchableOpacity >
      <TouchableOpacity  onPress={() => navigation.navigate('SecretChat')} style={{ alignItems: "center" }} >
        <Entypo name='mask' size={24} color="#44C2E4" />
        <Text style={{color:'#FFFFFF'}}>Secret Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('Settings')} style={{ alignItems: "center" }} >
        <Entypo name='chat' size={24} color="#44C2E4" />
        <Text style={{color:'#FFFFFF'}}>Messages</Text>
      </TouchableOpacity>
    </View>

  )
}
