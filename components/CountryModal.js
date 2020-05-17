import React from 'react'
import {View, StyleSheet,Modal,Text, Button,Image,ScrollView,TouchableOpacity} from 'react-native'
import TotalConfirmedCases from './TotalConfirmedCases'
import CurrentlyInfected from './CurrentlyInfected'
import Deaths from './Deaths'
import Recovered from './Recovered'
export default  CountryModal=(props)=> {
        return(
        <Modal transparent={true} visible={props.visible} animationType='slide' >
            
            <View style={styles.container} >
                <View style={styles.headerView}>
                   {"countryInfo" in props && (<View style={styles.imageView}><Image source={{uri:props.countryInfo.flag}}  style={styles.image}/></View>)}
                    {"country" in props && (<Text style={styles.boldtextContainer}>{props.country}</Text>)}
                    {/* <View style={styles.button}><Button  title={"X"} onPress={props.onToggle} color='black'  /></View> */}
                    
                    <TouchableOpacity style={styles.button}  onPress={props.onToggle}>   
                        <Text style={{fontSize:25}}>X</Text>
                    </TouchableOpacity>
                
                </View>
                <ScrollView style={{width:'100%'}}>
                <View style={{backgroundColor:'white', alignItems:'center',width:'100%'}}>
                <TotalConfirmedCases cases={props.cases} cardstyle={{padding:'0.5%',marginTop:'10%'}}/>
                    <CurrentlyInfected cases={props.active} cardstyle={{padding:'0.5%'}}/>
                    <Recovered cases={props.recovered} cardstyle={{padding:'0.5%'}}/>
                    <Deaths cases={props.deaths} cardstyle={{padding:'1%',marginBottom:'4%'}} />
                </View>
            </ScrollView>
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
        height:'7%',
        marginTop:200,
        justifyContent:'space-between',
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
        marginVertical:'2%',
        width:'53%',
        marginLeft:'4%',
      },
      button:{
          height:'100%',
          marginRight:'4%',
          marginTop:'2%',
          marginLeft:'0.25%',
      }
})