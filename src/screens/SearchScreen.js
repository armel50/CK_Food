import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar';


import React, { Component } from 'react'
import yelp from '../api/yelp';
import ListContainer from '../components/ListContainer';

export default class SearchScreen extends Component {
    state = {input: "", businesses: [], err: ""}
    handleChange= (value) => this.setState({input: value})
    handleSubmit = async () => {
        try{
            const resp = await  yelp.get('/search',{
                params:{
                 limit: 50,
                 term: this.state.input,
                 location: 'USA'
            }  
         })
            
     
     
             this.setState({businesses: resp.data.businesses})
             console.log(resp.data.businesses.filter(e => e.price === "$")) 
        }catch(err) {
            this.setState({err: "Something Went Wrong"})
        }
        
  
    
    }
    async componentDidMount(){
        try{
            const resp = await  yelp.get('/search',{
            params:{
             limit: 50,
             term: this.state.input,
             location: 'USA'
            }  
        })
 
         this.setState({businesses: resp.data.businesses})
    }catch(err) {
        this.setState({err: "Something Went Wrong"})
    }
    


    }

    render() {
        return (
            <ScrollView style={{height: "100%"}} showsVerticalScrollIndicator={false} >
                {this.state.err != "" && <Text>{this.state.err}</Text>} 
                <SearchBar value={this.state.input} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Text style={{alignSelf: "center"}}>We have found {this.state.businesses.length} results for this term</Text>
                {this.state.businesses.length > 0 &&
                <View> 
                    {this.state.businesses.find(e => e.price === '$') && <ListContainer title="Cost Effective" list={this.state.businesses.filter(e => e.price === "$" )} />}
                    {this.state.businesses.find(e => e.price === '$$') && <ListContainer title="Bit Pricer" list={this.state.businesses.filter(e => e.price === "$$")} />}
                   {this.state.businesses.find(e => e.price === '$$$') && <ListContainer title="Big Spender" list={this.state.businesses.filter(e => e.price=== "$$$")} />}
                </View>

                }
             </ScrollView>
        )
    }
}


