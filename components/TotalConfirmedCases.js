import React from 'react'
import {View,StyleSheet,Image, Text} from 'react-native'
import Card from './Card'

export default TotalConfirmedCases = props =>{
    return(
        <Card style={{...styles.card,...props.cardstyle}}>
        <View style={styles.innerView}>
        <View style={styles.imageView}><Image source={require('../assets/Totalcases.png')}  style={styles.image} /></View>
        <Text style={styles.boldtextContainer}>Total confirmed cases</Text>
        <Text style={styles.cases}>{props.cases}</Text>
        </View>
       </Card>
    )
}

const styles=StyleSheet.create({
    card:{
        width:350,
        maxWidth:'90%',
        marginTop:50,
      },
      innerView:{
        flexDirection:'row',
        padding:6,
        justifyContent:'space-between',
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
        marginLeft:15,
        fontWeight:'bold',
      },
      boldtextContainer:{
        fontWeight:'bold',
        fontSize:16,
        marginVertical:5,
        width:150,
        marginLeft:10,
      },
      imageView:{
        marginLeft:1,
      }
})

