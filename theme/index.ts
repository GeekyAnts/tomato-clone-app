import { extendTheme } from "native-base";

export const ZomatoTheme = extendTheme({
  colors: {
    pinkZomato: {
      100: "#d92662",
    },
    cyanZomato: {
      200: "rgb(255, 126, 139)",
      300: "#E5F3F3",
      500: "#EF4F5F",
    },
    grayZomato: {
      50: "#EF4F5F",
      75: "#e8e8e8",
      100: "#828282",
      200: "#696969",
      300: "#9C9C9C",
      400: "#b5b5b5",
      500: "#F8F8F8",
      600: "#4F4F4F",
      650: "rgb(54, 54, 54)",
      700: "rgb(28, 28, 28)",
      alpha5: "rgba(59,130,246,0.5)",
    },
    grayTransparentZomato: {
      400: "rgba(50,50,50,0)",
      500: "rgba(50,50,50,0.5)",
      600: "rgba(50,50,50,0.8)",
    },
    orangeTomato: {
      300: "#f4a266",
    },
    darkZomato: {
      600: "#1c1c1c",
    },
  },
});
