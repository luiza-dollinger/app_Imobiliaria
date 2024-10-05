import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { colors } from "../../constants/Colors";
import { router } from "expo-router";

interface Imovel {
  id: number;
  title: string;
  image: any;
}

export default function Home() {


  const imoveis: Imovel[] = [
    { id: 1, title: "Apartamento", image: require("../../assets/images/casa_2.jpg") },
    { id: 2, title: "Casa de Campo", image: require("../../assets/images/casa_1.jpg") },
    { id: 3, title: "Sítio", image: require("../../assets/images/apartamento_1.jpg") },
    { id: 4, title: "Chalé", image: require("../../assets/images/sitio.jpg") },
    { id: 5, title: "Terreno", image: require("../../assets/images/casa_campo.jpg") },
    { id: 6, title: "Sítio", image: require("../../assets/images/sitio.jpg") },
  ];

  return (
    
    <ScrollView>
    <View style={styles.container}>
      
      <View style={styles.imagemContainer}>
        <Image
          source={require("../../assets/images/imagem_home.jpg")}
          style={styles.imagem}
        />
        <Text style={styles.textoHome}>Encontre seu lugar</Text>
      </View>

      <View style={styles.linha}>
        <View style={styles.caixa}>
          <Image
            source={require("../../assets/images/apartamento_2.jpg")}
            style={styles.imagemCategoria}
          />
          <Text style={styles.textoCaixaAbaixo}>Comprar Apartamentos</Text>
        </View>
        <View style={styles.caixa}>
          <Image
            source={require("../../assets/images/casa_2.jpg")}
            style={styles.imagemCategoria}
          />
          <Text style={styles.textoCaixaAbaixo}>Comprar Casas</Text>
        </View>
        <View style={styles.caixa}>
          <Image
            source={require("../../assets/images/casa_1.jpg")}
            style={styles.imagemCategoria}
          />
          <Text style={styles.textoCaixaAbaixo}>Alugar Casas</Text>
        </View>
      </View>

      <View style={styles.linha}>
        <View style={styles.caixa}>
          <Image
            source={require("../../assets/images/apartamento_1.jpg")}
            style={styles.imagemCategoria}
          />
          <Text style={styles.textoCaixaAbaixo}>Alugar Apartamentos</Text>
        </View>
        <View style={styles.caixa}>
          <Image
            source={require("../../assets/images/casa_campo.jpg")}
            style={styles.imagemCategoria}
          />
          <Text style={styles.textoCaixaAbaixo}>Chalés</Text>
        </View>
        <View style={styles.caixa}>
          <Image
            source={require("../../assets/images/sitio.jpg")}
            style={styles.imagemCategoria}
          />
          <Text style={styles.textoCaixaAbaixo}>Terrenos</Text>
        </View>
      </View>

      <View style={styles.barra} />
      

      {imoveis.map((Imovel) => (      

        <TouchableOpacity key={Imovel.id} style={styles.caixaVertical}
        onPress={() => 
        router.push({
          pathname:"/house/[id]",
          params:{id: Imovel.id, title: Imovel.title, image: Imovel.image},
        })}>
        <Image
            source={Imovel.image}
            style={styles.imagemVertical}
          />
          <Text style={styles.textoCaixaVertical}>{Imovel.title}</Text>
        </TouchableOpacity>

      ))}

 
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  barra: {
    width: "90%",
    height: 7,
    backgroundColor: colors.escuro,
    marginVertical: 20,
  },
  textoHome: {
    position: "absolute",
    marginLeft: 150,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    color: colors.branco,
    fontSize: 24,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 0,
    backgroundColor: colors.bg,
  },
  imagemContainer: {
    width: "100%",
    height: 200,
    marginBottom: 0,
    overflow: "hidden",
  },
  imagem: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    bottom: 20
  },
  imagemCategoria: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  texto: {
    fontSize: 24,
    color: colors.escuro,
    marginBottom: 10,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  caixa: {
    width: "30%",
    height: 100,
    backgroundColor: colors.cinza,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "relative",
  },
  textoCaixaAbaixo: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    paddingVertical: 2,
    borderRadius: 5,
  },
  caixaVertical: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    backgroundColor: colors.cinza,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  textoCaixaVertical: {
    fontSize: 18,
    color: colors.escuro,
    flex: 1,
    marginLeft: 10,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  imagemVertical: {
    width: 100,
    height: "80%",
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10
  },
});


