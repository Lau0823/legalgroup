// HomePage.tsx
import HeroSection from '@/app/components/home/HeroSection'
import VisionaryHero from '@/app/components/home/VisionaryHero'
import visionaryHeroImg from '@/app/assets/VisionaryHero.jpg'
import { Box } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <Box 
    sx={{
      width: '100%',
      }}>
        <HeroSection/>
        <VisionaryHero
          imageUrl={visionaryHeroImg}
          imageAlt="Modern building architecture"
        />
    </Box>
  )
}

export default HomePage