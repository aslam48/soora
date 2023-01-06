import {StyleSheet, View, Text,Image } from 'react-native'
import React from 'react'

const Content = () => {
  return (
    <View style={styles.center}>
     <View style={styles.ItemWidth}>

     <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{width:20, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{textAlign: 'center', fontWeight:"1000", fontSize:19}}>Coming Soon</Text>
  </View>
 </View>

 <View>
    <Text style={{ fontSize: 40, textAlign: 'center'}}>Bringing </Text>
    <Text style={{ fontSize: 40, textAlign: 'center'}}> Muslims Together</Text>
 </View>


 <View style={styles.store}>
 <Image
        style={styles.logo}
        source={require('../../assets-native/google-play.png')}/>

<Image
        style={styles.logo}
        source={require('../../assets-native/apple-store.png')}/>
 </View>

     </View>
    </View>
  )
}

export default Content


const styles = StyleSheet.create({
    ItemWidth: {
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        marginVertical:50,
    
    },

    center:{
        justifyContent: "center",
        alignItems: "center"
    },

    flex__Text:{
        flexDirection: "row"
    },

    store: {
        flexDirection: "row"
    },

    logo: {
        width: 150,
        height: 48,
        resizeMode: "cover"
      },
    
  });
  