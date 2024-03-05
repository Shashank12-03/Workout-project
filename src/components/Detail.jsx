import React from 'react';
import { Typography, Stack , Button } from '@mui/material';
import bodyImage from '../assets/icons/body-part.png';
import targetImage from '../assets/icons/target.png';
import equipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
  const {bodyPart,gifUrl,name,target,equipment}=exerciseDetail;
  return (
    <Stack
      gap="60px"
      sx={{flexDirection:{lg:'low'},p:'20px', alignItems:'center'}}
    >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
    </Stack>
  )
}

export default Detail;