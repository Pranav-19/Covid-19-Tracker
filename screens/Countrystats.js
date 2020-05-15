import React from 'react';
import { StyleSheet, Text, View,ScrollView ,FlatList} from 'react-native';
import CountryCard from '../components/countryCard'
import {fetchCountryStats} from '../api'
import LoadingModal from '../components/loadingModal'
export default class CountryStats extends React.Component
{
  state={
    countries:[],
    last_update:"",
    visible:false
  }
  componentDidMount()
  {
    this.region_stats()
  }
  region_stats= async ()=>
   {
     try{
       this.setState({visible:true})
      const data=await fetchCountryStats()
      const {rows}=data
      rows.shift()  
      // console.log(results)
      this.setState({
        countries:rows,
        last_update:data.last_update, visible:false
      })
     }
     catch(err)
     {
       console.log(err)
     }
   }

  render()
  {
    return (
      <View style={styles.container}>
      {this.state.visible && (<LoadingModal visible={this.state.visible} />)}
      <Text style={styles.text}>Last updated on: {this.state.last_update}</Text>    
      {this.state.countries && 
      ( <FlatList data={this.state.countries} renderItem={({item})=> <CountryCard {...item} /> }
      keyExtractor={item => item.country }  />)
      } 
      </View> 
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
    alignItems:'center',
  },
  text:{
    fontSize:16,
    marginTop:15,
  }
});