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
  
  ThemeProvider,
  Container,
} from '@mui/material';
import { articlesData, featuredInsightsData, publicationsData } from './Mock/insights.mock';
import theme from '@/theme';





interface ArticleCardProps {
  date: string;
  title: string;
  description: string;
}


const ArticleCard: React.FC<ArticleCardProps> = ({ date, title, description }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '2px',
      boxShadow: 'none',
      border: '1px solid #e0e0e0', 
    }}
  >
    <CardContent>
      <Typography variant="body2" sx={{ color: 'tertiary.main', mb: 1, textTransform: 'uppercase' }}>
        {date}
      </Typography>
      <Typography variant="h6" sx={{ color: 'tertiary.main', mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'tertiary.main' }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default function Insights() {
  return (
    <ThemeProvider theme={theme}>


      <Box sx={{
            bgcolor: 'header.main',
            color: 'white',
            p: { xs: 20, md:20},
           
            
          }}>
  </Box>
      <Box sx={{ bgcolor: 'primary.main', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Sección principal de Insights destacados con dos columnas */}
          <Box sx={{
            bgcolor: 'primary.main',
            color: 'white',
            p: { xs: 4, md: 6 },
            borderRadius: '2px',
          }}>
          

             


           
            <Grid container spacing={0}>
              {featuredInsightsData.map((item, index) => (
                <Grid size={6}>
                  <Box>
                    <CardMedia
  component="img"
  image={item.image}
  alt={item.title}
  sx={{
    width: '100%',
    height: 350,
    objectFit: 'cover'
  }}
/>
                    <Box sx={{ pt: 2 }}>
                      <Typography variant="body2" sx={{ color: 'header.main', mb: 1, textTransform: 'uppercase' }}>
                        {item.date}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'tertiary.main' }}>
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
            <Typography variant="h6" sx={{ color: 'tertiary.main', mb: 3 }}>
              Articles
            </Typography>
            <Grid container spacing={3}>
              {articlesData.map((article, index) => (
                <Grid size={4}>
                  <ArticleCard {...article} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'header.main',
                  
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
            <Typography variant="h6" sx={{ color: 'tertiary.main', mb: 3 }}>
              Publications
            </Typography>
            <Grid container spacing={3}>
              {publicationsData.map((article, index) => (
                <Grid size={4}>
                  <ArticleCard {...article} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'header.main',
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
