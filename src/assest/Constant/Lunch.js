import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Lunch = () => {
//  
  return (
    <View style={{backgroundColor:"white", borderRadius:15,top:10}}>
      <View style={{backgroundColor:'black', width:50,height:50}}>

      {/* <Image
        source={{ uri: '' }} 
        resizeMode='contain'
        style={{ width: 50, height: 50 }}
      /> */}
      </View>
      <Text style={{color:'black'}}>Lunch</Text>
    </View>
  );
};

export default Lunch;

const styles = StyleSheet.create({});
