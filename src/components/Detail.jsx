import React from 'react';
import { Typography, Stack , Button, Box } from '@mui/material';
import bodyImage from '../assets/icons/body-part.png';
import targetImage from '../assets/icons/target.png';
import equipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
  const {bodyPart,gifUrl,name,target,equipment}=exerciseDetail;
  const extraDetail=[
    {
      icon:bodyImage,
      name:bodyPart,
    },
    {
      icon:targetImage,
      name:target,
    },
    {
      icon:equipmentImage,
      name:equipment,
    },
  ]
  return (
    <Stack
      gap="60px"
      sx={{flexDirection:{lg:'row'},p:'20px', alignItems:'center'}}
    >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
      <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
        <Typography variant='h3'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong. {name} bup is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail?.map((item)=>(
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{background:'#FFF2D8', borderRadius:'50%', width:'100px',height:'100px'}}>
              <img src={item.icon} alt={bodyPart} style={{width:'50px',height:'50px'}}/>
            </Button>
            <Typography variant='h5' textTransform="capitalize" sx={{fontSize:{lg:'30px',xs:'20px'}}}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail;