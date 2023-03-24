import React from 'react'
import { MaterialIcons,FontAwesome } from '@expo/vector-icons'; 

import * as S from './styles'

export default function NavButton (props) {
  return (
    <S.Row onPress={props.onPress}>
      <FontAwesome name={props.icon} size={20} color="#44C2E4" />
      <S.Text>{props.text}</S.Text>
    </S.Row>
  )
}
