import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Breakfast from '../assest/Constant/Breakfast';
import Brunch from '../assest/Constant/Brunch';
import Lunch from '../assest/Constant/Lunch';
import Dinner from '../assest/Constant/Dinner';

const Timewisefood = () => {
  const [foodShowingTime, setFoodShowingTime] = useState('');

  useEffect(() => {
    const updateTimeBasedOnHour = () => {
      const time = new Date();
      const hour = time.getHours();

      if (hour >= 6 && hour < 12) {
        setFoodShowingTime(Breakfast);
      } else if (hour >= 12 && hour < 16) {
        setFoodShowingTime(Lunch);
      } else if (hour >= 16 && hour < 19) {
        setFoodShowingTime(Brunch);
      } else {
        setFoodShowingTime(Dinner);
      }
    };

    updateTimeBasedOnHour();
    // You can also add a timer to update the meal time every minute
    const timer = setInterval(updateTimeBasedOnHour, 60000);

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, []);

  return (
    <View>
      <Text style={{ color: 'white' }}>{foodShowingTime}</Text>
    </View>
  );
};

export default Timewisefood;

const styles = StyleSheet.create({});
