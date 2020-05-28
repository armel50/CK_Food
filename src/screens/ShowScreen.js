import {View, Text, FlatList, Image, Button,TouchableOpacity} from 'react-native'
import yelp from '../api/yelp';
import * as Linking from 'expo-linking';



import React, { Component } from 'react'

export default class ShowScreen extends Component {
    state = {
        business: {},
        err: ""
    }

    async componentDidMount(){
        const id = this.props.navigation.getParam("id")
        try{

       const business =  await yelp.get(`/${id}`)
       console.log("========================")
       console.log(business.data)
       console.log("===================")
       this.setState({business: business.data})
        }catch(err){
            this.setState({err: "Something Went Wrong"})
        }

    }

 

    render() {
        return (
            <View style={{padding: 10}}>
                { this.state.business.alias ?

                 <View >
                        <Text style={{alignSelf: "center", fontWeight: 'bold', fontSize: 28}}>{this.state.business.name}</Text>
                        <FlatList
                            data={this.state.business.photos}
                            keyExtractor={item => item}
                            renderItem = {({item}) => (<View style={{ marginHorizontal: 20, marginVertical: 20}}>
                                                        <Image style={{height: 300, width: 370, borderRadius: 8}} source={{uri: item}}/>
                                                    </View>)}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            
                        />
                        <Text style={{marginBottom: 100}}>{this.state.business.rating} Star, {this.state.business.review_count} Reviews </Text>
                        <View style={{flexDirection: "row"}}>
                            <Button style={{marginHorizontal: 0, display: 'block'}} onPress={() => Linking.openURL(this.state.business.url)} title="View online" style={{marginVertical: 0}}/>
                            <Button onPress={() => Linking.openURL(`tel:${this.state.business.phone}`)} title={`Call ${this.state.business.phone}`}/>
                        </View>

                        <View style={{borderColor: "#000", borderRadius: 8, borderWidth: 1, margin: 10, padding: 10 }}>
                            <Text style={{fontSize: 20, fontWeight: "bold"}}>Address</Text>
                            <Text>{this.state.business.location.display_address[0]}</Text>
                            <Text>{this.state.business.location.display_address[1]}</Text>

                        </View>
                    </View>

                    :

                    <Text>{this.state.err}</Text>
                }
                   
                
                
            </View>
        )
    }
}
