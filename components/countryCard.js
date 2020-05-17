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
    // console.log("props:"+props)
    return(
      <TouchableOpacity onPress={toggleModal}>
        <CountryModal visible ={isVisible} {...props} onToggle={toggleModal}/>
        <Card style={styles.card}>
        <View style={styles.innerView}>
        <View style={styles.imageView}><Image source={{uri:props.countryInfo.flag}}  style={styles.image}/></View>
         <Text style={styles.boldtextContainer}>{props.country}</Text>
         <Text style={styles.cases}>{props.cases}</Text>
        </View>
       </Card>
       </TouchableOpacity>
    )
    
}

const styles=StyleSheet.create({
    card:{
        width:'97%',
        maxWidth:'97%',
        marginTop:'8%',
        padding:'3%',
      },
      innerView:{
        flexDirection:'row',
        padding:3,
      } ,
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
      },
      cases:{
        fontSize:15,
        color:'#45c4ff',
        marginTop:'2.5%',
        marginLeft:'3%',
        fontWeight:'bold',
      },
      boldtextContainer:{
        fontWeight:'bold',
        fontSize:16,
        marginVertical:'2.5%',
        width:'56%',
        marginLeft:'6%',
        
      },
      imageView:{
        marginLeft:1,
        width:'12%',
        height:40,
      }
})

