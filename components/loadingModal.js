import React from 'react'
import {View,StyleSheet,ActivityIndicator,Modal} from 'react-native'

export default loadingModal= (props) =>{
    return(
        <Modal transparent={true} visible={props.visible}  > 
            <View style={styles.container} > 
                <ActivityIndicator animating={true} color="green" size="large" />
            </View>

        </Modal>
    )
}

const styles=StyleSheet.create({
container:{
    flex:1,
    marginTop:350,
},
})