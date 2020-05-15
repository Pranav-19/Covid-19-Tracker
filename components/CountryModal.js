import React from 'react'
import {View, StyleSheet,Modal,Text, Button,Image} from 'react-native'
import TotalConfirmedCases from './TotalConfirmedCases'
import CurrentlyInfected from './CurrentlyInfected'
import Deaths from './Deaths'
import Recovered from './Recovered'
export default  CountryModal=(props)=> {
        return(
        <Modal transparent={true} visible={props.visible} animationType='slide' >
            <View style={styles.container} >
                <View style={styles.headerView}>
                    <View style={styles.imageView}><Image source={{uri:props.flag}}  style={styles.image}/></View>
                    <Text style={styles.boldtextContainer}>{props.country}</Text>
                    <Button style={styles.button} title={"X"} onPress={props.onToggle} color='black'  />
                </View>
                <View style={{backgroundColor:'white', alignItems:'center'}}>
                    <TotalConfirmedCases cases={props.total_cases} cardstyle={{padding:2}}/>
                    <CurrentlyInfected cases={props.active_cases} cardstyle={{padding:2}}/>
                    <Recovered cases={props.total_recovered} cardstyle={{padding:2}}/>
                    <Deaths cases={props.total_deaths} cardstyle={{padding:2,marginBottom:20}} />
                </View>
            </View>
        </Modal>
        )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000aa',
    },
    headerView:{
        flexDirection:'row',
        backgroundColor:'#FF6600',
        width:'100%',
        height:45,
        marginTop:200,
    },
    imageView:{
        marginLeft:1,
      },
    image:{
        width:40,
        height:45,
        resizeMode:'contain',
        marginLeft:10,
      },  
      boldtextContainer:{
        fontWeight:'bold',
        fontSize:18,
        marginVertical:5,
        width:150,
        marginLeft:30,
        marginTop:10,
        marginRight:156,
      },
      button:{
          
      }
})