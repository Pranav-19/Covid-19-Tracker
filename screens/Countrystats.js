import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements'
import CountryCard from '../components/countryCard'
import {fetchCountryStats} from '../api'
import LoadingModal from '../components/loadingModal'
export default class CountryStats extends React.Component
{
  state={
    countries:[],
    // last_update:"",
    visible:false,
    arrayHolder:[],
    searchText:"",
    
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
      
      // console.log("hello")
      // console.log("received:"+data)
      this.setState({
        countries:data,arrayHolder:data,
        // last_update:data.last_update,
         visible:false
      })
     }
     catch(err)
     {
       console.log(err)
     }
   }
   searchFilter =(text)=>
   {
      this.setState({searchText:text})
      const newCountries=this.state.arrayHolder.filter( item =>{
        const itemData= item.country.toUpperCase()
        const textData= text.toUpperCase()
        return itemData.indexOf(textData) >- 1
      })
      this.setState({countries:newCountries})
   }

  render()
  {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar placeholder="Search a country" lightTheme
          round={true} onChangeText={text => this.searchFilter(text)}
          autoCorrect={false} value={this.state.searchText} 
          />
        </View>
      {this.state.visible && (<LoadingModal visible={this.state.visible} />)}
      {/* { this.state.message && (<Text style={styles.text}>{this.state.message}</Text>)}     */}
      {this.state.countries && 
      ( <FlatList data={this.state.countries} renderItem={({item})=> {
        return <CountryCard {...item} />} }
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
    padding:'2%',
    alignItems:'center',
  },
  text:{
    fontSize:16,
    marginTop:'3%',
  },
  searchBar:{
    width:'98%',
    backgroundColor:'#fff',
  }
});