import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentMuscle, setEquipmentMuscle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscle(targetMuscleData);

      const equipmentMuscleData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentMuscle(equipmentMuscleData);
    };

    fetchExerciseData();
  }, [id]);

  console.log("Exercisesdetail",exerciseDetail);
  console.log("Exercisevideos",exerciseVideos);
  console.log("Muscle",targetMuscle);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscle={targetMuscle} equipmentMuscle={equipmentMuscle} />
    </Box>
  );
};

export default ExerciseDetail;
