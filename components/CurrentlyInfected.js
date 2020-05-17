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
        width:'90%',
        maxWidth:'90%',
        marginTop:'8%',
      },
      innerView:{
        flexDirection:'row',
        padding:3,
        justifyContent:'space-between',
      } , 
      image:{
        width:40,
        height:45,
        resizeMode:'contain',
      },
      cases:{
        fontSize:15,
        color:'red',
        marginTop:'1.5%',
        fontWeight:'bold',
        marginRight:'1.5%'
      },
      boldtextContainer:{
        fontWeight:'bold',
        fontSize:16,
        marginVertical:'2%',
        width:'56%',
        marginLeft:'6%',
      },
      imageView:{
        marginLeft:1,
      }
})

