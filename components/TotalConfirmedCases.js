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
        width:'90%',
        maxWidth:'90%',
        marginTop:'14%',
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
        color:'#45c4ff',
        marginTop:'2%',
        marginLeft:'3%',
        fontWeight:'bold',
        marginRight:'1.5%'
      },
      boldtextContainer:{
        fontWeight:'bold',
        fontSize:16,
        marginVertical:'2%',
        width:'55%',
        marginLeft:'4%',
      },
      imageView:{
        marginLeft:1,
      }
})

