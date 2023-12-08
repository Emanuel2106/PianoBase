import { colors } from "./colors";
import { fonts } from "./typography";

import { MD3LightTheme as DefaultTheme, PaperProvider } from "react-native-paper";

const theme = {...DefaultTheme, colors, fonts};

export const ThemeProvider = ({children}) => {
  return (
    <PaperProvider theme={theme}>
      {children}
    </PaperProvider>
  );
};