import { StyleSheet } from "react-native";
import { THEME } from "../../theme";
import { captureRejectionSymbol } from "events";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 32,
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
  },
  subtitle: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  
});
