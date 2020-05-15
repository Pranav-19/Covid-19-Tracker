import React,{useState} from 'react'
import {View,StyleSheet,Image, Text,TouchableOpacity} from 'react-native'
import Card from './Card'
import CountryModal from './CountryModal'
export default CountryCard =(props)=>
{
    const [isVisible,toggleVisible]=useState(false)
    const toggleModal=()=>
    {
      toggleVisible(prevState=> !prevState)
    }
    return(
      <TouchableOpacity onPress={toggleModal}>
        <CountryModal visible ={isVisible} {...props} onToggle={toggleModal}/>
        <Card style={styles.card}>
        <View style={styles.innerView}>
        <View style={styles.imageView}><Image source={{uri:props.flag}}  style={styles.image}/></View>
         <Text style={styles.boldtextContainer}>{props.country}</Text>
         <Text style={styles.cases}>{props.total_cases}</Text>
        </View>
       </Card>
       </TouchableOpacity>
    )
    
}

const styles=StyleSheet.create({
    card:{
        width:340,
        marginTop:30,
        padding:10,
      },
      innerView:{
        flexDirection:'row',
        padding:8,
      } , 
      image:{
        width:40,
        height:45,
        resizeMode:'contain',
      },
      cases:{
        fontSize:16,
        color:'#45c4ff',
        marginTop:6,
        marginLeft:10,
        fontWeight:'bold',
      },
      boldtextContainer:{
        fontWeight:'bold',
        fontSize:16,
        marginVertical:5,
        width:150,
        marginLeft:30,
        marginTop:10,
      },
      imageView:{
        marginLeft:1,
      }
})

