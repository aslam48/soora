import {StyleSheet, View, Text } from 'react-native'
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

     </View>
    </View>
  )
}

export default Content


const styles = StyleSheet.create({
    ItemWidth: {
        width: 300,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },

    center:{
        justifyContent: "center",
        alignItems: "center"
    },

    flex__Text:{
        flexDirection: "row"
    }
  });
  