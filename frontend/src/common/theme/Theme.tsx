import { adaptV4Theme, createTheme } from "@mui/material/styles";
import { red } from "@material-ui/core/colors";


export const BULLET = `•`;
export const cardRadius = 20;

const primaryColor = "#A13E5F";
const primaryLightColor = "#D25482";
const primaryDarkColor = "#89324D";
const primaryContrastTextColor = "#FAFAFA";

const secondaryColor = "#115689";
const secondaryLightColor = "#449CBF";
const secondaryDarcColor = "#013554";
const secondaryContrastTextColor = "#FAFAFA";

export const lightBackgroundColor = "#FAFAFA";
export const darkBackgroundColor = "#272727"; //eerie black

/*
--royal-purple: #7F55A6;
--purple-plum: #8F61AD;
--purple-mountain-majesty: #9F6DB5;
--african-violet: #AF78BC;
--african-violet-2: #BF84C3;

--sapphire-blue: #056196;
--celadon-blue: #2575A1;
--blue-ncs: #4589AC;
--air-superiority-blue: #649DB7;
--dark-sky-blue: #84B1C2;

--eerie-black: #272727;
--onyx: #444444;
--dim-gray: #606060;
--gray-web: #7D7D7D;
--spanish-gray: #999999;

*/

const theme = createTheme(adaptV4Theme({

  palette: {
    text: {
      primary: primaryContrastTextColor,
      secondary: "#7D7D7D"
    },

    primary: {
      main: primaryColor,
      light: primaryLightColor,
      dark: primaryDarkColor,
      contrastText: primaryContrastTextColor,
    },
    secondary: {
      main: secondaryColor,
      light: secondaryLightColor,
      dark: secondaryDarcColor,
      contrastText: secondaryContrastTextColor,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: darkBackgroundColor,
      paper: darkBackgroundColor
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "Roboto"
      },
      h1: {
        fontSize: 36,
      },
      h2: {
        fontSize: 30,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 22,
      },
      h5: {
        fontSize: 18,
      },
      h6: {
        fontSize: 16,
      },
      subtitle1: {
        fontSize: 18,
      },
      subtitle2: {
        fontSize: 20,
      },
      body1: {
        fontSize: 16,
      },
      body2: {
        fontSize: 14,
      },
      caption: {
        fontSize: 10,
      },
    },
    MuiCard: {
      root: {
        borderRadius: cardRadius,
        // boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.04)',
      },
    },
    MuiButton: {
      root: {
        borderRadius: cardRadius,
        // boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.04)',
        paddingTop: '0px !important',
        paddingBottom: '0px !important',
      },
    },
    MuiCheckbox: {
      root: {},
      colorSecondary: {
        color: primaryColor,
        '&$checked': {
          color: primaryColor,
        },
      },
    },
  }
}
));

export const darkTheme = createTheme(adaptV4Theme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        '& $notchedOutline': {
          borderColor: theme.palette.secondary.contrastText,
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: theme.palette.primary.contrastText,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: theme.palette.secondary.contrastText,
          },
        },
        '&$focused $notchedOutline': {
          borderColor: theme.palette.primary.main,
        },
      },
    },
    MuiSelect: {
      iconOutlined: {
        color: theme.palette.secondary.contrastText
      },
      root: {
        color: theme.palette.secondary.contrastText
      }
    },
    MuiFormLabel: {
      root: {
        color:
          theme.palette.secondary.contrastText
        ,
        '&$focused': {
          color: theme.palette.primary.main
        }
      }
    },
    MuiSvgIcon: {
      root: {
        color: theme.palette.secondary.contrastText
      }
    },
    MuiFormControl: {
      root: {
        color: theme.palette.primary.main
      }
    },
    MuiFormControlLabel: {
      root: {
        color: theme.palette.primary.main
      }
    },
    MuiTextField: {
      root: {
        color: theme.palette.secondary.contrastText,
        '&$focused': {
          color: theme.palette.secondary.contrastText
        },
        "&:hover .MuiInputAdornment-root .MuiSvgIcon-root": {
          color: theme.palette.secondary.contrastText
        },
        "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
          color: theme.palette.secondary.contrastText
        }
      }
    },
    MuiInputBase: {
      root: {
        color: theme.palette.secondary.contrastText,
      }
    },
    MuiTypography: {
      root: {
        color: theme.palette.secondary.contrastText,
      }
    },
    MuiInputAdornment: {
      root: {
        color: theme.palette.secondary.contrastText,
      }
    },
    MuiIcon: {
      root: {
        color: theme.palette.secondary.contrastText,
      }
    }

  }
}));
export default theme;