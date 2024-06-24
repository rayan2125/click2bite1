import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const App = () => {
  return (
    <View style={{flex:1 ,position:'relative'}}> 
      <LinearGradient colors={["#F4C430","#228B22"]} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity style={{ position:'absolute',top:'90%',backgroundColor:'#F4C430',width:'80%',height:40,justifyContent:'center',alignItems:'center',borderRadius:18}}>

      <Text style={{color:'white'}}>Get Started</Text>
</TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})