import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Background } from "./src/components/Background";
import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [foontsLoad] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {foontsLoad ? <Home /> : <Loading />}
    </Background>
  );
}

// RUN EXPO = npx expo start
//Caso a fonte não carregue executar o npx expo install @expo-google-fonts/inter expo-font
// e Apagar o npm-cache dentro de C:\Users\Arlan\AppData\Local
//Stop in 01:52
