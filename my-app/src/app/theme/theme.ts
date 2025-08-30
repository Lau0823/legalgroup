// styles/theme.ts
import { createTheme } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    captionSmall: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    captionSmall?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    captionSmall: true;
  }
}

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  palette: {
    primary: {
      main: '#202020',
      // Puedes usar otros colores para otras partes si los necesitas
      // blue: blue[700],
    },
    secondary: {
      main: '#A0A0A0',
      // red: red[500],
    },
    background: {
      default: '#F8F5F2', // Color de fondo de la vista de contacto
      paper: '#FFFFFF',
    },
    text: {
      primary: '#202020',
      secondary: '#6E6E6E',
    },
  },
  typography: {
    fontFamily: ['"Inter"', 'sans-serif'].join(','),
    h3: {
      fontFamily: ['"Playfair Display"', 'serif'].join(','),
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h6: {
      fontFamily: ['"Playfair Display"', 'serif'].join(','),
      fontSize: '1.25rem',
      fontWeight: 600, // Manteniendo tu configuración original
    },
    body1: {
      fontFamily: ['"Inter"', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    body2: {
      fontFamily: ['"Inter"', 'sans-serif'].join(','),
      fontSize: '0.875rem',
    },
    caption: {
      fontFamily: ['"Inter"', 'sans-serif'].join(','),
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    captionSmall: {
      fontFamily: ['"Inter"', 'sans-serif'].join(','),
      fontSize: '0.65rem',
    },
    button: {
      fontFamily: ['"Inter"', 'sans-serif'].join(','),
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0px',
        },
        contained: {
          backgroundColor: '#202020',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#404040',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '0px',
            backgroundColor: '#FFFFFF',
            '& fieldset': {
              borderColor: '#E0E0E0',
            },
            '&:hover fieldset': {
              borderColor: '#B0B0B0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#202020',
            },
          },
          '& .MuiInputLabel-root': {
            fontFamily: ['"Inter"', 'sans-serif'].join(','),
            color: '#A0A0A0',
          },
          '& .MuiInputBase-input': {
            fontFamily: ['"Inter"', 'sans-serif'].join(','),
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#A0A0A0',
          '&.Mui-checked': {
            color: '#202020',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: ['"Inter"', 'sans-serif'].join(','),
          fontSize: '0.75rem',
        },
      },
    },
  },
});

export default theme;