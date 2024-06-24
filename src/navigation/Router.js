
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Dashboard from '../screen/Dashboard'
import Order from '../page/Order'
import Login from '../page/Auth/Login'



const Stack = createStackNavigator()
const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name='Login' component={Login}/> */}
      <Stack.Screen name='Dashboard' component={Dashboard}/>
      <Stack.Screen name='Order' component={Order}/>
    </Stack.Navigator>
  )
}

export default Router

