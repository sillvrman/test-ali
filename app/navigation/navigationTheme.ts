import colors from "@app/config/colors";
import { DefaultTheme } from "@react-navigation/native";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
