import React from 'react'
import {View,StyleSheet,Image, Text} from 'react-native'
import Card from './Card'

export default CurrentlyInfectedCases = props =>{
    return(
      <Card style={{...styles.card,...props.cardstyle}}>
        <View style={styles.innerView}>
        <View style={styles.imageView}><Image source={require('../assets/CurrentlyInfected.png')}  style={styles.image} /></View>
        <Text style={styles.boldtextContainer}>Currently Infected</Text>
        <Text style={styles.cases}>{props.cases}</Text>
        </View>
       </Card>
    )
}

const styles=StyleSheet.create({
    card:{
        width:350,
        maxWidth:'90%',
        marginTop:30,
      },
      innerView:{
        flexDirection:'row',
        padding:8,
        justifyContent:'space-between',
      } , 
      image:{
        width:40,
        height:45,
        resizeMode:'contain',
      },
      cases:{
        fontSize:16,
        color:'red',
        marginTop:6,
        marginLeft:10,
        fontWeight:'bold',
      },
      boldtextContainer:{
        fontWeight:'bold',
        fontSize:16,
        marginVertical:5,
        width:150,
        marginLeft:13,
      },
      imageView:{
        marginLeft:1,
      }
})

