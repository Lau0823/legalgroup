// themes/typography.ts
import { createTheme } from '@mui/material/styles';

const typography = createTheme({
  typography: {
    // Aquí puedes definir tu fuente principal para todo el cuerpo
    fontFamily: ['Inter', 'sans-serif'].join(','),

    // Usa Playfair Display específicamente para los títulos
    h1: {
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
    },
    // Y en la variante que corresponde al título de la imagen
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700, // Usa el peso que cargaste
      fontSize: '2.5rem', // Ajusta el tamaño para que se vea como en la imagen
    },
    // ... el resto de tus variantes como 'overline' y 'body1'
  },
});

export default typography;