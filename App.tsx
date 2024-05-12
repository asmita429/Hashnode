import React from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, useColorScheme } from "react-native";

function App(): JSX.Element{
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      {/* <Text style={styles.textBox}>Hello World!</Text>
      <Text style={styles.textBox}>Hello World!</Text>
      <Text style={styles.textBox}>Hello World!</Text> */}

      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World!</Text>
      {/* <Image source={}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    fontSize: 30,
    color: "blue"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#000000',
  },
});
export default App;