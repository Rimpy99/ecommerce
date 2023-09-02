import "@mui/material/styles/createPalette";

type AppColorsType = {
  navLink: string,
  navLinkBackground: string,
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    appColors: AppColorsType;
  }
}