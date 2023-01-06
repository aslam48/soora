
import { StyleSheet, Text, View, Image } from 'react-native';
import Content from './Component/Pages/Content';
import Nav from './Component/Pages/NavBar'

export default function App() {
  return (
    <View style={styles.AppContainer}>
         <Nav/>
         <Content/>
    </View>
  );
}


const styles = StyleSheet.create({
  AppContainer: {
  backgroundColor:" #FAFAFA",
  flex: 1
  },
});

