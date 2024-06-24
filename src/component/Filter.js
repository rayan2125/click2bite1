import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"

const Filter = ({ setSelectedItem, }) => {
    const TypeofTime = ["Breakfast", "Lunch", "Brunch", "Dinner"]
    const [open, setOpen] = useState(false)
    const [chnageColor,setColorChange] =useState(null)



    const handlePress = () => {
        setOpen(!open)
    }

    const handleColor = (item) => {
        setSelectedItem(item)
        setColorChange(item)
        setOpen(false)
    }
    

    return (
        <>
            <TouchableOpacity onPress={handlePress} style={{ backgroundColor: "green", height: 40, width: 40, borderRadius: 99, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 5, right: 5 }}>
                <Icon name="sort" size={20} color="#F4C430" />
            </TouchableOpacity>
            {
                open &&
                <View style={{ backgroundColor: "white", position: 'absolute', top: 45, right: 0, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10,zIndex:99 }}>
                    {
                        TypeofTime.map((item, index) => {
                            return (
                                <TouchableOpacity

                                    style={{ backgroundColor: chnageColor === item ? "#FFFA99" : "transparent", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => handleColor(item)}
                                    key={index}
                                >
                                    <View style={{ flexDirection: 'row' }}>

                                        <Text>{item}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            }
        </>
    )
}

export default Filter

const styles = StyleSheet.create({})
