import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import {Box, Stack, Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage,setCurrentPage] = useState(1);
  const exercisepage=9;
  
  useEffect(()=>{
    const fetchExerciseData=async ()=>{
      let exercisesData=[];
      if(bodyPart==='all'){
        exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      }else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExerciseData();
  },[bodyPart,setExercises]);
  const indexofLastExerciese=currentPage*exercisepage;
  const indexofFirstExercise=indexofLastExerciese-exercisepage;
  const currentExercises=exercises.slice(indexofFirstExercise,indexofLastExerciese);
  const paginate=(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior:'smooth'})
  }
  return (
    <Box id="exercises" sx={{mt:{lg:'110px'}}} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Showing results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise,index)=>(
          <ExerciseCard  key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack>
        {exercises.length> 9 && (
            <Pagination 
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length/exercisepage)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises;
