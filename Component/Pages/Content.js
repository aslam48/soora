import { StyleSheet, View, Text, Image, ScrollView , TextInput, TouchableHighlight,TouchableOpacity} from "react-native";
import React from "react";
// import { Icon } from 'react-native-eva-icons';

const Content = () => {
  return (
    <ScrollView>
      <View style={styles.center}>
        <View style={styles.ItemWidth}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ width: 20, height: 1, backgroundColor: "black" }} />
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "1000",
                  fontSize: 19,
                }}
              >
                Coming Soon
              </Text>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 40, textAlign: "center" }}>Bringing </Text>
            <Text style={{ fontSize: 40, textAlign: "center" }}>
              {" "}
              Muslims Together
            </Text>
          </View>

          {/* play store button */}
          <View style={styles.store}>
            <Image
              style={styles.logo}
              source={require("../../assets-native/google-play.png")}
            />

            <Image
              style={styles.logo}
              source={require("../../assets-native/apple-store.png")}
            />
          </View>
          {/* play store button */}

          {/* app image on phone device */}
          <View>
            <Image
              style={styles.androidPic}
              source={require("../../assets-native/landing-image-2.png")}
            />
          </View>
          {/* app image on phone device */}
        </View>



     {/* section 2 content */}

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{width:20, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{textAlign: 'center', fontWeight:"1000", fontSize:19}}>Coming Soon</Text>
  </View>
 </View>


              <View>
            <Text style={{ fontSize: 40, textAlign: "center" }}>Get Notified  </Text>
            <Text style={{ fontSize: 40, textAlign: "center" }}>
              {" "}
              When we Launch
            </Text>
          </View>


          {/* <View style={styles.maincontainer}>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter Name"/>
            </View>
        </View> */}
        
        <View style={{flexDirection:'row', width: window.width, margin: 15, padding:4, alignItems:'center', justifyContent:'center', borderWidth:2, borderColor:'#888', borderRadius:50, backgroundColor:'#fff'}}>
  <View style={{flex:1.5}}>
  <TextInput
      onChangeText = {() => {}}
      style={{backgroundColor:'transparent'}}
   
    />
</View>
<View style={{flex:1}}>
<TouchableOpacity onPress={() => {}}>
  <View
    style={{
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 40,
      padding: 11,
      width:124,
    }}>

    <Text style={{color: 'white', fontSize: 20, fontWeight: '800', textAlign: "center"}}>
      Contact us
    </Text>
    
  </View>
</TouchableOpacity>
</View>
</View>

      </View>
    </ScrollView>
  );
};

export default Content;

const styles = StyleSheet.create({
  ItemWidth: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  flex__Text: {
    flexDirection: "row",
  },

  store: {
    flexDirection: "row",
  },

  logo: {
    width: 145,
    height: 48,
    resizeMode: "cover",
    marginVertical: 13,
    marginHorizontal: 10,
  },

  androidPic: {
    width: 345,
    height: 400,
    resizeMode: "cover",
  },
});
