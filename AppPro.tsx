import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  useColorScheme,
  StyleSheet
} from 'react-native';
function AppPro():JSX.Element{
  const isDarkMode = useColorScheme() === 'dark';
  return(
    // <SafeAreaView>
    //   <View style={styles.container}>
    //     <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Monis</Text>
    //   </View>
    // </SafeAreaView>
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Monis</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    color: '#ffffff'
  },
  whiteText:{
    color: '#ffffff'
  },
  blackText:{
    color: '#000000'
  }

})
export default AppPro;