import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { colors } from "../../constants/Colors";
import { router } from "expo-router";

interface Imovel {
  id: number;
  title: string;
  price: string;  
  local: string;  
  info: string;
  image: any;
  video: string;
}

export default function Home() {
  const imoveis: Imovel[] = [
    {
      id: 1,
      title: "Casa Maravilhosa",
      price: "3.200.000",
      local:"Rio de Janeiro, Barra da Tijuca",
      info: "Casa com quatro quartos no melhor condomínio da Zona Oeste",
      image: require("../../assets/images/casa_2.jpg"),
      video:"DLzxrzFCyOs",
    },
    {
      id: 2,
      title: "Casa de Campo",
      price: "4.100.000",
      local:"Rio de Janeiro, Vargem Grande",
      info: "Casa com duas suítes e local para pets",
      image: require("../../assets/images/casa_1.jpg"),
      video:"bOY3qic5_t4",
    },
    {
      id: 3,
      title: "Apartamento",
      price: "2.250.000",
      local:"Rio de Janeiro, Recreio dos Bandeirantes",
      info: "Apartamento mais barato da região",
      image: require("../../assets/images/apartamento_1.jpg"),
      video:"DLzxrzFCyOs",
    },
    {
      id: 4,
      title: "Terreno",
      price: "1.800.000",
      local:"Rio de Janeiro, Barra da Tijuca",      
      info: "Terreno com 500m²",
      image: require("../../assets/images/sitio.jpg"),
      video:"DLzxrzFCyOs",
    },
    {
      id: 5,
      title: "Chalé",
      price: "5.000.000",
      local:"Rio de Janeiro, Petropólis",      
      info: "Chalé aconchegante na serra de Petrópolis",
      image: require("../../assets/images/casa_campo.jpg"),
      video:"DLzxrzFCyOs",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/imagem_home.jpg")}
          style={styles.imagem}
        >
          <View style={styles.overlay}>
            <Text style={styles.textoHome}>Encontre seu lugar</Text>
          </View>
        </ImageBackground>

        <View style={styles.linha}>
          <View style={styles.caixa}>
            <View style={styles.imagemContainer}>
              <Image
                source={require("../../assets/images/apartamento_2.jpg")}
                style={styles.imagemCategoria}
              />
              <View style={styles.overlay2} />
            </View>
            <Text style={styles.textoCaixaAbaixo}>Comprar Apt</Text>
          </View>

          <View style={styles.caixa}>
            <View style={styles.imagemContainer}>
              <Image
                source={require("../../assets/images/casa_2.jpg")}
                style={styles.imagemCategoria}
              />
              <View style={styles.overlay2} />
            </View>
            <Text style={styles.textoCaixaAbaixo}>Comprar Casas</Text>
          </View>

          <View style={styles.caixa}>
            <View style={styles.imagemContainer}>
              <Image
                source={require("../../assets/images/casa_1.jpg")}
                style={styles.imagemCategoria}
              />
              <View style={styles.overlay2} />
            </View>
            <Text style={styles.textoCaixaAbaixo}>Alugar Casas</Text>
          </View>
        </View>

        <View style={styles.linha}>
          <View style={styles.caixa}>
            <View style={styles.imagemContainer}>
              <Image
                source={require("../../assets/images/apartamento_1.jpg")}
                style={styles.imagemCategoria}
              />
              <View style={styles.overlay2} />
            </View>
            <Text style={styles.textoCaixaAbaixo}>Alugar Apt</Text>
          </View>
          <View style={styles.caixa}>
            <View style={styles.imagemContainer}>
              <Image
                source={require("../../assets/images/casa_campo.jpg")}
                style={styles.imagemCategoria}
              />
              <View style={styles.overlay2} />
            </View>
            <Text style={styles.textoCaixaAbaixo}>Chalés</Text>
          </View>
          <View style={styles.caixa}>
            <View style={styles.imagemContainer}>
              <Image
                source={require("../../assets/images/sitio.jpg")}
                style={styles.imagemCategoria}
              />
              <View style={styles.overlay2} />
            </View>
            <Text style={styles.textoCaixaAbaixo}>Terrenos</Text>
          </View>
        </View>

        <View style={styles.barra} />

        {imoveis.map((Imovel) => (
          <TouchableOpacity
            key={Imovel.id}
            style={styles.caixaVertical}
            onPress={() =>
              router.push({
                pathname: "/house/[id]",
                params: {
                  id: Imovel.id,
                  title: Imovel.title,
                  price:Imovel.price,
                  local:Imovel.local,
                  info: Imovel.info,
                  image: Imovel.image,
                  video: Imovel.video,
                },
              })
            }
          >
            <Image source={Imovel.image} style={styles.imagemVertical} />
            <View style={styles.textContainer}>
              <Text style={styles.textoCaixaVertical}>{Imovel.title}</Text>
              <Text style={styles.infoText}>{Imovel.info}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

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
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 180,
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
    height: "100%",
    position: "relative",
  },
  imagem: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    bottom: 20,
    elevation: 5,
  },
  imagemCategoria: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    elevation: 5,
  },
  textoCaixaAbaixo: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  caixaVertical: {
    flexDirection: "row",
    width: "95%",
    height: 100,
    backgroundColor: colors.cinza,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    elevation: 5,
  },
  textoCaixaVertical: {
    fontSize: 18,
    color: colors.escuro,
    marginTop: 20,
    fontWeight: "bold",
  },
  imagemVertical: {
    width: 100,
    height: "80%",
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },
  overlay2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 13,
    marginBottom: 10,
    color: colors.escuro,
    marginTop: 5,
    lineHeight: 18,
    maxWidth: "90%",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
});
