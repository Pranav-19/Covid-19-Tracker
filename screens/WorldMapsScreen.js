import React,{useState} from 'react'
import MapView,{PROVIDER_GOOGLE}  from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
// import {mapStyle} from '../styles/mapStyle'
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
          console.log(location)
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
        console.log("Pressed")
        this.setState({animating:true})
        const result = await Location.reverseGeocodeAsync(nativeEvent.coordinate)
        console.log(result)
        if(result.length===0 || !'country' in result[0] || result[0].country===null)
        {
          this.setState({animating:false})
           return;
        }
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
        <MapView style={styles.mapStyle}   initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 92.2,
        longitudeDelta: 92.2,
        }}  onPress={this.GeocodeAsync}
        />  
        </View>  
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    mapStyle: {
        flex:1,
    },
  });