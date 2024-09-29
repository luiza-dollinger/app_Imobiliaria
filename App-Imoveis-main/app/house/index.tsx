import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator, useWindowDimensions, ScrollView} from "react-native";
import  AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../constants/Colors";
import Constants from "expo-constants";
import img1 from "../../assets/images/casa.jpg";
import { Link } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

//video
const VIDEO_HEIGHT = 180;
const SCREEN_SPACE = 24;
import YoutubeIframe from "react-native-youtube-iframe";

export default function House() {
  
  //video
  const[videoReady, setVideoReady] = useState(false);
  const {width} = useWindowDimensions();
  const VIDEO_WIDTH = width - (SCREEN_SPACE * 2);


  return (

    <ScrollView style={style.container} >

      <Link href='/home'>
        <AntDesign name="left" size={20} color={colors.escuro}/>
      </Link>

      <View style={style.div1}>
        <Image source={img1} style={style.midia} />
        <Text style={style.title}>Casa Maravilhosa</Text>
      </View>

      <Text style={style.subtitle}>Valor</Text>
      <Text style={style.price}>R$ 3.200.000</Text>

      <Text style={style.subtitle}>Localização</Text>
      <Text style={style.text}>Rio de Janeiro, Barra da Tijuca</Text>

      <Text style={style.subtitle}>Detalhes</Text>
      <Text style={style.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, eligendi voluptates odit consequatur quasi, dolore omnis harum eveniet assumenda, magni dolorum qui odio laborum? Odit quo dolore iure quam deserunt?
      </Text>

      <Text style={style.textVideo}>Video da Residencia</Text>
      
      {/*video*/}
      <View style={style.player} >        
      <YoutubeIframe
        videoId="DLzxrzFCyOs"
        width={VIDEO_WIDTH}
        height={videoReady ? VIDEO_HEIGHT : 0}
        onReady={() => setVideoReady(true)}
      />

      {!videoReady && <ActivityIndicator color="red" />}
      </View>


      <TouchableOpacity style={style.button2}>
        <Text style={style.textButton}>Conversar com o Vendedor</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const style = StyleSheet.create({
  
  container: {
    marginTop: statusBarHeight + 3,
    padding: SCREEN_SPACE,
    backgroundColor: colors.cinza,
  },

  div1: {
    alignItems: "center",
    justifyContent: "center",
    margin:20
  },

  midia: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },

  title: {
    fontWeight: "bold",
    color: colors.title,
    fontSize: 30,
  },

  subtitle: {
    color: colors.title,
    paddingVertical:5,
    fontSize: 17,
    fontWeight: "bold",
  },

  text: {
    paddingLeft: 10,
    fontSize: 17,
  },

  price: {
    fontSize: 17,
    paddingLeft: 20,
    fontWeight: "bold",
    color: "green",
  },

  textVideo: {
    color: colors.title,
    paddingVertical: 20,
    fontSize: 23,
    fontWeight: "bold",
  },

  button2: {
    backgroundColor: colors.escuro,
    width: "70%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 20,
  },

  textButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },


  player:{
    width:'100%',
    height: VIDEO_HEIGHT,
    alignItems:'center',
    justifyContent: 'center',


  }
});