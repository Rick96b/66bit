declare module'*.module.scss' {
    const content: any;
    export default content;
}

declare module '@mui/material/styles' {
    interface Theme {
        palette: {
            mainColor: string;
            textColor: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        palette?: {
            mainColor?: string;
            textColor?: string;
        };
    }
  }

declare module "*.jpg";
declare module "*.png";
declare module "*.svg";