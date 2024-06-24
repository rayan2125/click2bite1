import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Gradientbtn = (props) => {
    console.log("check", props)

  return (
    <>
    <LinearGradient colors={["#061211","#4DAABD"]}  style={{ height:40,borderRadius:20,margin:10,alignItems:'center',width:100}}>
    <TouchableOpacity onPress={setActiveCategory} style={{padding:5,paddingHorizontal:4,height:40,   alignItems:'center', justifyContent:"center"}}>
            
            <Text style={{color:'white'}}>{props.value[1].restaurant}</Text>
        </TouchableOpacity>

    </LinearGradient>
    </>
  )
}

export default Gradientbtn

const styles = StyleSheet.create({})