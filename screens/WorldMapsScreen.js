import React,{useState} from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {mapStyle} from '../styles/mapStyle'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import CountryModal from '../components/CountryModal'
import {fetchByCountry} from '../api'
import LoadingModal from '../components/loadingModal'

export default class WorldMap extends React.Component {
  
    state={isVisible:false,data:{} , animating:false}
    toggleModal=()=>
    {
        this.setState(prevState => ({ isVisible:!prevState.isVisible}))
    }
    getLocationPermissionAsync = async () => {
        try
        {
        const { status, permissions } = await Permissions.askAsync(
          Permissions.LOCATION
        );
        console.log(permissions);
        if (status === 'granted') {
          let location = await Location.getCurrentPositionAsync({});
          this.setState({ location });
        } else {
          console.error('Location permission not granted');
        }
      }
      catch(err)
      {
          console.log(err)
      }
    }
      componentDidMount()
      {
          this.getLocationPermissionAsync()

      }
    
    GeocodeAsync = async ({nativeEvent})=>{
        try{
        this.setState({animating:true})
        const result = await Location.reverseGeocodeAsync(nativeEvent.coordinate)
        const {country}=result[0]
        const data= await fetchByCountry(country)
        console.log(data)
        this.setState({data:data, animating:false})
        this.toggleModal();
        }
        catch(err)
        {
            console.log(err)
        }
    }

    render() {
      return (
        <View style={styles.container}>  
        {this.state.animating && (<LoadingModal visible={this.state.animating} />)}
        { this.state.isVisible &&  (<CountryModal visible ={this.state.isVisible} {...this.state.data} onToggle={this.toggleModal}/>)}
        <MapView style={styles.mapStyle} initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 922,
        longitudeDelta: 922,
        }}  customMapStyle={mapStyle} provider='google' onPress={this.GeocodeAsync} />  
        </View>  
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
        flex:1,
    },
  });