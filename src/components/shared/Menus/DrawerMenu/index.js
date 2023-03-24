import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons'

import * as S from './styles'

import NavButton from './NavButton'

export default function DrawerMenu (props) {
  return (
    <S.Column>

      <DrawerContentScrollView>

        <NavButton
          icon='user-plus'
          text='Register account'
          onPress={() => props.navigation.navigate('SignUp')}
        />

        <S.Separator />

        <NavButton
          icon='hospital-o'
          text='Visit hospital'
          onPress={() => props.navigation.navigate('Settings')}
        />

        <S.Separator />

        <NavButton
          icon='calendar-times-o'
          text='Book Appointment'
          // onPress={() => props.navigation.navigate('Page')}
        />
        
      </DrawerContentScrollView>

      <S.Footer>
        <NavButton
          icon='info'
          text='About'
          // onPress={() => props.navigation.navigate('Page')}
        />
      </S.Footer>

    </S.Column>
  )
}
