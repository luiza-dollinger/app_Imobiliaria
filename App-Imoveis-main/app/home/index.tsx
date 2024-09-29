import { View, Text, StyleSheet} from "react-native";
import React from "react";
import {Link} from "expo-router"

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <Link href="/house">casa</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"lightblue",
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})