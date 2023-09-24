import "@mui/material/styles/createPalette";

type AppColorsType = {
  textColor: string,
  buttonOnHoverBackground: string,
  buttonActiveBackground: string,
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    appColors: AppColorsType;
  }
}