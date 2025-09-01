'use client';

import React from 'react';
import { Box, Typography, Container, Link, Card } from '@mui/material';
import Image from 'next/image';
import careersImage from '@/app/assets/career.png';

const Careers = () => {
  return (
    <Box
      sx={{
        bgcolor: '#dcd8cc',
        fontFamily: 'var(--font-inter)',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 6,
            position: 'relative',
          }}
        >
          {/* Imagen con fondo rojo */}
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: '50%' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Rectángulo rojito */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: '10%', md: '15%' },
                left: { xs: '5%', md: '10%' },
                width: { xs: '90%', md: '80%' },
                height: { xs: '250px', md: '400px' },
                bgcolor: '#772528',
                borderRadius: '12px',
                zIndex: 1,
              }}
            />
            {/* Imagen */}
            <Box
              sx={{
                position: 'relative',
                width: { xs: '90%', md: '80%' },
                height: { xs: '250px', md: '400px' },
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                zIndex: 2,
              }}
            >
              <Image
                src={careersImage}
                alt="Modern building architecture"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </Box>

          {/* Texto en Card */}
          <Card
            elevation={3}
            sx={{
              width: { xs: '100%', md: '50%' },
              p: { xs: 3, md: 5 },
              borderRadius: '12px',
              zIndex: 3,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: '#772528',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                mb: 2,
              }}
            >
              Careers
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: '#4d4f4e',
                fontFamily: 'var(--font-merriweather)',
                fontWeight: 700,
                lineHeight: 1.4,
                mb: 3,
              }}
            >
              Build Your Future With a Firm Shaping the Legal Landscape of the Middle East and Beyond
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#4d4f4e',
                fontFamily: 'var(--font-inter)',
                fontSize: '1rem',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              At Hussaini Legal Group, we are always looking for sharp minds, strategic thinkers, and driven legal
              professionals to join our growing team. Whether you're an experienced lawyer or at the beginning of your
              legal career, joining us means contributing to complex, high-impact matters in Syria, the wider Middle
              East, and international markets.
            </Typography>

            <Link href="#" underline="none">
              <Typography
                variant="body2"
                sx={{
                  fontStyle: 'italic',
                  color: '#772528',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                See More...
              </Typography>
            </Link>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Careers;
