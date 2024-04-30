import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <SafeAreaView>
    <View>
        <Text style={styles.headingText}>Elevated Cards</Text>
      <View style={styles.container}>
        <ScrollView horizontal>
        <View style={styles.box}>
            <Text> This 
            </Text>
        </View>
        <View style={styles.box}>
            <Text>
                Card
            </Text>
        </View>
        <View style={styles.box}>
            <Text>
                is
            </Text>
        </View>
        <View style={styles.box}>
            <Text>
                Scrollable
            </Text>
        </View>
        <View style={styles.box}>
            <Text>
                😁
            </Text>
        </View>
        </ScrollView>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText:{
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
        borderRadius:4,
        backgroundColor: '#1D8348',
        elevation:10,
        shadowOffset: {
            width: 1, 
            height: 1,
        },
        shadowColor: '#82E0AA',
        shadowOpacity: 0.8,
        shadowRadius: 1,
    }
})