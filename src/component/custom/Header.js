import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
const Header = ({onPress}) => {
  return (
    <View style={{backgroundColor:'black',height:60,justifyContent:"center"}}>
      {/* <Text style={{color:'white'}}>Header</Text> */}
      <TouchableOpacity onPress={onPress} style={{marginHorizontal:5}} >

      <Icon name="arrow-left" color="white" size={20} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})