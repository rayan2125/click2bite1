import { View, Text } from 'react-native'
import React from 'react'
import Header from '../component/custom/Header'
import { useNavigation } from '@react-navigation/native'

const Order = ({navigation,route}) => {
  console.log(route.params)
  // const navigation = useNavigation
  return (
   <>
   <Header 
   onPress={()=>navigation.navigate("Dashboard")}
   />
   
   </>
  )
}

export default Order