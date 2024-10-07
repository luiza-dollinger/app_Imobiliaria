import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../constants/Colors";
import { Link, useLocalSearchParams } from "expo-router";

//video
const VIDEO_HEIGHT = 210;
const SCREEN_SPACE = 24;
import YoutubeIframe from "react-native-youtube-iframe";

export default function House() {
  //id image title price local details video
  const { id } = useLocalSearchParams();
  const { title } = useLocalSearchParams();
  const { info } = useLocalSearchParams();
  const { image } = useLocalSearchParams();

  //video
  const [videoReady, setVideoReady] = useState(false);
  const { width } = useWindowDimensions();
  const VIDEO_WIDTH = width - SCREEN_SPACE * 2;

  return (
    <ScrollView style={style.container}>
      <Link href="/(tabs)">
        <AntDesign name="left" size={20} color={colors.escuro} />
      </Link>

      <View style={style.div1}>
        <Image source={image} style={style.midia} />
        <Text style={style.title}> {title}</Text>
      </View>

      <Text style={style.subtitle}>Valor</Text>
      <Text style={style.price}>R$ 3.200.000</Text>

      <Text style={style.subtitle}>Localização</Text>
      <Text style={style.text}>Rio de Janeiro, Barra da Tijuca</Text>

      <Text style={style.subtitle}>Detalhes</Text>
      <Text style={style.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
        eligendi voluptates odit consequatur quasi, dolore omnis harum eveniet
        assumenda, magni dolorum qui odio laborum? Odit quo dolore iure quam
        deserunt?
      </Text>

      <Text style={style.textVideo}>Vídeo da Residência</Text>

      {/*video*/}
      <View style={style.player}>
        <YoutubeIframe
          videoId="DLzxrzFCyOs"
          width={VIDEO_WIDTH}
          height={videoReady ? VIDEO_HEIGHT : 0}
          onReady={() => setVideoReady(true)}
        />

        {!videoReady && <ActivityIndicator color="red" />}
      </View>

      <View style={style.barra} />

      <TouchableOpacity style={style.button}>
        <Text style={style.textButton}>Conversar com o Vendedor</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: SCREEN_SPACE,
    backgroundColor: colors.bg,
  },

  div1: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
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
    paddingVertical: 5,
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

  barra: {
    width: "100%",
    height: 7,
    backgroundColor: colors.escuro,
    marginVertical: 20,
    alignContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: colors.escuro,
    width: "70%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 20,
    marginBottom: 40,
  },

  textButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  player: {
    width: "100%",
    height: VIDEO_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
});
