import React from "react";
import { View, Image } from "react-native";

import logoImg from "../../assets/logo-nlw-esportsa.png";

import { styles } from "./styles";
import { Heading } from "../../components/Heading";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu DUO!"
        subtitle="Selecione o game que deseja jogar.."
      />
    </View>
  );
}
