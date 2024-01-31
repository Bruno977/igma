import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    lineHeight:{
      xl: string,
      lg: string,
      md : string,
      sm: string,
      xs: string,
      xxs:  string
    },
    letterSpacing:  {
      default: string,
      sm: string,
      md: string,
      lg: string
    },
    fontSize: {
      giant: string,
      display: string,
      xxxl: string,
      xxl: string,
      xl: string,
      lg: string,
      md: string,
      sm: string,
      xs: string,
      xxs: string,
      xxxs: string
  
    },
    borderRadius: { 
      circle: string,
      pill: string,
      lg: string,
      md: string,
      sm: string,
      none: string,
    },
    borderWidth: {
      heavy: string,
      thick: string,
      thin: string,
      hairline: string,
      none: string,
    },
    spacingInline: { 
      xl: string,
      lg: string,
      md: string,
      sm: string,
      xs: string,
      xxs: string,
      xxxs: string,
      nano: string,
      quarck: string
    },
    spacingStack:{
       giant: string,
       huge: string,
       xxxl : string,
       xxl : string,
       xl : string,
       lg: string,
       md: string,
       sm: string,
       xs: string,
       xxs: string,
       xxxs: string,
       nano: string,
       quarck: string,
    },
    fontFamily: {
      base: string,
    },
    fontWeight: { 
      extrabold: string,
      bold: string,
      semibold: string,
      medium: string,
      regular: string,
    },
    colors:{
      primary: { 
        light: string,
        main: string,
        dark: string,
        contrast: string,
        background: string,
      },
      secondary: { 
        light: string,
        main: string,
        dark: string,
        contrast: string,
        background: string,
      },
      tertiary: { 
        light: string,
        main: string,
        dark: string,
        contrast: string,
        background: string,
      },
      error:{
        light: string,
        main: string,
        dark: string,
        contrast: string,
        background: string,
      },
      success:{
        light: string,
        main: string,
        dark: string,
        contrast: string,
        background: string,
      },
      warning:{
        light: string,
        main: string,
        dark: string,
        contrast: string,
        background: string,
      },
      info: { 
        light: string,
        main: string,
        dark: string,
        contrast: string,
        background: string,
      },
      dark: { 
        secondary: string,
        main: string,
        highlight: string,
        contrast: string,
        disabled: string,
      },
      light: { 
        secondary: string,
        main: string,
        highlight: string,
        contrast: string,
      },
      background: { 
        1: string,
      },
    }
  }
}