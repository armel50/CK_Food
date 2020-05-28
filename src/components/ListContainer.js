import React from 'react'
import {View, Text, FlatList, Image,TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';

 function ListContainer({title, list, navigation}) {
    return (
        <View style={{marginVertical: 10, height: "30%", width: "100%"}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', marginHorizontal: 16}}>{title}</Text>
            

            <FlatList 
                horizontal
                data={list}
              keyExtractor={item => item.id}
              renderItem = {({item}) => (<TouchableOpacity onPress={() => navigation.navigate("ShowScreen",{id: item.id})} style={{ marginHorizontal: 16, paddingVertical: 30}}>
                                           <View>
                                                <Image 
                                                style={{height: 200, width: 250, borderRadius: 8}}
                                                source={{uri: item.image_url}}
                                            />
                                            </View>
                                            <View>
                                                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>{item.name}</Text>
                                                  <Text >{item.rating} Stars, {item.review_count} Reviews</Text>

                                            </View>
                                        </TouchableOpacity>)}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}

            />
        </View>
    )
}
export default withNavigation(ListContainer)