// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  global: {
    "html, body": {
      color: "gray.600",
      lineHeight: "tall",
      height: "100%",
    },
  },
});

export default theme;
