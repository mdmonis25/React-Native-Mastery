import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Cards</Text>
      <View style={[styles.card,styles.elevated]}>

      </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    headingText:{
    fontSize:21,
    fontWeight:'bold',
    padding:10
},
card:{},
elevated:{}
})