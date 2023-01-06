import { StyleSheet, Text, View, Image, TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'

const NavBar = () => {
  return (
    <View style={styles.container}>

    <View  style={styles.flex}>
        <StatusBar style="auto"/>


<View>
<Image
        style={styles.logo}
        source={require('../../assets-native/logo.png')}/>
</View>
        
     
     <TouchableOpacity onPress={() => {}}>
  <View
    style={{
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      padding: 11,
      width:124,
    }}>

    <Text style={{color: 'white', fontSize: 20, fontWeight: '800', textAlign: "center"}}>
      Contact us
      
      <View>
      <Image
        style={styles.arror}
        source={require('../../assets-native/Line.png')}/>
      </View>
    
    </Text>
    
  </View>
</TouchableOpacity>

    </View>

    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight, 
    },

    logo:{
        height: 30,
        width: 80,
        resizeMode: 'stretch',
    },

    

    flex: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical:8,
        marginHorizontal:-80,
        alignItems:'center'
    }
})