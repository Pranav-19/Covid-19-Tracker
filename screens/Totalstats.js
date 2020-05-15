import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import TotalConfirmedCases from '../components/TotalConfirmedCases'
import CurrentlyInfected from '../components/CurrentlyInfected'
import Recovered from '../components/Recovered' 
import Deaths from '../components/Deaths'
import {fetchTotalStats} from '../api'
import LoadingModal from '../components/loadingModal'
export default class Totalstats extends React.Component
{
  state={
    stats:[],
    visible:false
  }
  componentDidMount()
  {
    this.total_stats()
  }
  total_stats= async ()=>
   {
     try{
      this.setState({visible:true})
      const results=await fetchTotalStats()
      // console.log(results)
      this.setState({
        stats:results,visible:false
      })
     }
     catch(err)
     {
       console.log("catch")
       console.log(err)
     }
   }

  render()
  {
    return (
      <View style={styles.container}>
      {this.state.visible && (<LoadingModal visible={this.state.visible} />)}
      <TotalConfirmedCases cases={this.state.stats.total_cases}/>
      <CurrentlyInfected cases={this.state.stats.currently_infected}/>
      <Recovered cases={this.state.stats.recovery_cases}/>
      <Deaths cases={this.state.stats.death_cases}/>
      <Text style={styles.text}>Last updated on: {this.state.stats.last_update}</Text>         
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