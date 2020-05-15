import React from 'react'
import {View,StyleSheet} from 'react-native'

export default Card = (props)=>{
    return(<View style={{...styles.card,...props.style}}>{props.children}</View>)
}

const styles=StyleSheet.create({
    card:
    {
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowRadius:6,
        shadowOffset:{
            width:0,
            height:2
        },
        elevation:8,
        padding:20,
        borderRadius:10,
        backgroundColor:'white',
    },
})