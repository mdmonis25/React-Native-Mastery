import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
      <View style={styles.container}>
    <View style={[styles.box, {backgroundColor:'red'}]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.box, {backgroundColor:'blue'}]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.box, {backgroundColor:'green'}]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCards;

const styles = StyleSheet.create({
    heading:{
        fontSize:21,
        fontWeight:'bold',
        padding:10
    },
    container:{
        flex:1,
        flexDirection:'row',
        
    },
    box:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        margin:5,
        borderRadius:4
        
    }
})