'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Container,
} from '@mui/material';

// Definir un tema de MUI para los colores y tipografía
const theme = createTheme({
  palette: {
    primary: {
      main: '#8b1e2e', // Rojo oscuro
    },
    secondary: {
      main: '#f4f2ef', // Beige
    },
    text: {
      primary: '#333333',
      secondary: '#6c6b69',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h3: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h6: {
      fontWeight: 'bold',
      fontSize: '1.1rem',
      lineHeight: 1.4,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
  },
});

// Datos de ejemplo para las secciones
const featuredInsightsData = [
  {
    image: 'https://cdn.prod.website-files.com/67067a908482471659ad6f88/6710e9491d381b33c8f6aa4e_clarisse-meyer-jKU2NneZAbI-unsplash%20(1)-p-800.jpg',
    title:
      'In a high-stakes business litigation case, our legal team secured a multi-million-dollar settlement.',
    date: 'Jun 28, 2023',
  },
  {
    image: 'https://cdn.prod.website-files.com/67067a908482471659ad6f88/6710e93c5863eef512e4f06e_rick-rothenberg-PoWdDkNTxuw-unsplash%20(1)-p-800.jpg',
    title:
      'We helped a client navigate a divorce, achieving a fair division of assets.',
    date: 'Jun 28, 2023',
  },
];

const articlesData = [
  {
    date: 'Jun 28, 2023',
    title: 'Resolving to a complete dismissal of the case',
    description:
      'Lorem ipsum dolor sit amet consectetur in a pellentesque sit risus tristique et nulla sit a',
  },
  {
    date: 'Jul 15, 2023',
    title: 'Resolving to a complete dismissal of the case',
    description:
      'Lorem ipsum dolor sit amet consectetur in a pellentesque sit risus tristique et nulla sit a',
  },
  {
    date: 'Sep 3, 2023',
    title: 'Resolving to a complete dismissal of the case',
    description:
      'Lorem ipsum dolor sit amet consectetur in a pellentesque sit risus tristique et nulla sit a',
  },
];

const publicationsData = [
  {
    date: 'Nov 14, 2023',
    title: 'Resolving to a complete dismissal of the case',
    description:
      'Lorem ipsum dolor sit amet consectetur in a pellentesque sit risus tristique et nulla sit a',
  },
  {
    date: 'Dec 1, 2023',
    title: 'Resolving to a complete dismissal of the case',
    description:
      'Lorem ipsum dolor sit amet consectetur in a pellentesque sit risus tristique et nulla sit a',
  },
  {
    date: 'Jan 9, 2024',
    title: 'Resolving to a complete dismissal of the case',
    description:
      'Lorem ipsum dolor sit amet consectetur in a pellentesque sit risus tristique et nulla sit a',
  },
];

// Definir la interfaz para las props de la tarjeta
interface ArticleCardProps {
  date: string;
  title: string;
  description: string;
}

// Sub-componente para las tarjetas de artículo
const ArticleCard: React.FC<ArticleCardProps> = ({ date, title, description }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '2px',
      boxShadow: 'none',
      border: '1px solid #e0e0e0', // Borde sutil
    }}
  >
    <CardContent>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1, textTransform: 'uppercase' }}>
        {date}
      </Typography>
      <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default function InsightsPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'secondary.main', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Sección principal de Insights destacados con dos columnas */}
          <Box sx={{
            bgcolor: 'primary.main',
            color: 'white',
            p: { xs: 4, md: 6 },
            borderRadius: '2px',
          }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Insights
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', mb: 4 }}>
              A Slong, Events & Recent Articles
            </Typography>
            <Grid container spacing={4}>
              {featuredInsightsData.map((item, index) => (
                <Grid item xs={12} md={6} xl={6} key={index}>
                  <Box>
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.image}
                      alt={item.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <Box sx={{ pt: 2 }}>
                      <Typography variant="body2" sx={{ color: 'white', mb: 1, textTransform: 'uppercase' }}>
                        {item.date}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'white' }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Sección de Artículos */}
          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Typography variant="h4" sx={{ color: 'primary.main', mb: 3 }}>
              Articles
            </Typography>
            <Grid container spacing={3}>
              {articlesData.map((article, index) => (
                <Grid item xs={12} sm={6} md={4} xl={4} key={index}>
                  <ArticleCard {...article} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'primary.main',
                  '&:hover': { bgcolor: '#6a1622' },
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: '2px',
                }}
              >
                All Articles
              </Button>
            </Box>
          </Box>

          {/* Sección de Publicaciones */}
          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Typography variant="h4" sx={{ color: 'primary.main', mb: 3 }}>
              Publications
            </Typography>
            <Grid container spacing={3}>
              {publicationsData.map((article, index) => (
                <Grid item xs={12} sm={6} md={4} xl={4} key={index}>
                  <ArticleCard {...article} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'primary.main',
                  '&:hover': { bgcolor: '#6a1622' },
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: '2px',
                }}
              >
                All Articles
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
