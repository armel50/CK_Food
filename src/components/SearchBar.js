import {View, Text, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'; 


import React from 'react'

export default function SearchBar({value,handleChange, handleSubmit}) {
        return (
            <View style={{borderColor: "0000",alignSelf: "center" , borderRadius: 6, borderWidth: 1, width: "80%", height: 55, padding: 10, backgroundColor: "rgb(205, 208, 209)", flexDirection: "row", marginVertical: 30}}>              
                <Feather name="search" size={24} color="black" style={{width: "10%"}} />

                    <TextInput 
                value={value}
                onChangeText= {newVal => handleChange(newVal)}
                style={{width: "90%", fontSize: 18}}
                autoCapitalize="none"
                 placeholder="Search Business" 
                autoCorrect={false}
                onEndEditing={handleSubmit}
              />

              
            </View>
          
          
        
        )

}
