import {Stack, Box,Typography } from '@mui/material';
import React from 'react'
import HorizantalScrollbar from './HorizantalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscle,equipmentMuscle}) => {
  console.log("target muscle",targetMuscle);
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography variant='h3' mb={5}>
          Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{p:'2',position:'relative'}}>
        {targetMuscle.length>0? <HorizantalScrollbar data={targetMuscle}/>: <Loader/> }
      </Stack>
      <Typography variant='h3' mb={5}>
          Exercises that uses the same equipment 
      </Typography>
      <Stack direction="row" sx={{p:'2',position:'relative'}}>
        {targetMuscle.length>0? <HorizantalScrollbar data={equipmentMuscle}/>: <Loader/> }
      </Stack>
    </Box>
  )
}

export default SimilarExercises;