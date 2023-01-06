import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Content = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.flex}>
          <StatusBar style="auto" />

          <View>
            <Image
              style={styles.logo}
              source={require("../../assets-native/logo.png")}
            />
          </View>

          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                padding: 11,
                width: 124,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Contact us
                <View>
                  <Image
                    style={styles.arror}
                    source={require("../../assets-native/Line.png")}
                  />
                </View>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

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
              style={styles.logoStore}
              source={require("../../assets-native/google-play.png")}
            />

            <Image
              style={styles.logoStore}
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

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ width: 20, height: 1, backgroundColor: "black" }} />
          <View>
            <Text
              style={{ textAlign: "center", fontWeight: "1000", fontSize: 19 }}
            >
              Coming Soon
            </Text>
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 40, textAlign: "center" }}>
            Get Notified{" "}
          </Text>
          <Text style={{ fontSize: 40, textAlign: "center" }}>
            {" "}
            When we Launch
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: window.width,
            margin: 15,
            padding: 4,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: "#888",
            borderRadius: 50,
            backgroundColor: "#fff",
          }}
        >
          <View style={{ flex: 1.5 }}>
            <TextInput
              onChangeText={() => {}}
              style={{ backgroundColor: "transparent" }}
              placeholder="subscribe"
            />
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 40,
                  padding: 11,
                  width: 124,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  Contact us
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text>Don’t worry, we won’t spam you :)</Text>
        </View>
        {/* section 2 content End*/}




        {/* second android pic  */}
        <View>
          <Image
            style={styles.androidPic2}
            source={require("../../assets-native/landing-image-1.png")}
          />
        </View>
        {/* second android pic  */}





        {/* social media icons  */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>

            <View style={styles.circle}>
          <Image
            style={styles.SocialIcons}
            source={require("../../assets-native/facebook.png")}
          />
      </View>

      <View style={styles.circle}>
          <Image
            style={styles.SocialIcons}
            source={require("../../assets-native/twitter.png")}
          />
      </View>

          
      <View style={styles.circle}>
          <Image
            style={styles.SocialIcons}
            source={require("../../assets-native/instagram.png")}
          />
      </View>


      <View style={styles.circle}>
          <Image
            style={styles.SocialIcons}
            source={require("../../assets-native/tiktok.png")}
          />
      </View>


      <View style={styles.circle}>
          <Image
            style={styles.SocialIcons}
            source={require("../../assets-native/youtube.png")}
          />
      </View>
  </View>
        {/* social media icons  */}


      </View>
    </ScrollView>
  );
};

export default Content;

const styles = StyleSheet.create({

    circle: {
        width: 46,
        height: 46,
        borderRadius:50,
        borderWidth: 2,
        borderColor: "#888",
        alignItems:"center",
        justifyContent: "center",
        marginHorizontal: 6,
        marginVertical: 10,
     },

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

  logoStore: {
    width: 135,
    height: 48,
    resizeMode: "cover",
    marginVertical: 13,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  androidPic: {
    width: 350,
    height: 400,
    resizeMode: "cover",
  },

  androidPic2: {
    width: 350,
    height: 400,
    resizeMode: "cover",
    marginVertical: 20,
  },

  logo: {
    height: 30,
    width: 100,
    resizeMode: "stretch",
  },

  flex: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 8,
    marginHorizontal: -80,
    alignItems: "center",
  },

  SocialIcons: {
    height: 20,
    width: 20,
    resizeMode: "stretch",
  }
});
