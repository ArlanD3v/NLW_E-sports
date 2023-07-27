import React from "react";
import { View, Image } from "react-native";

import logoImg from "../../assets/logo-nlw-esportsa.png";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} 
      style={styles.logo} />
    </View>
  );
}
