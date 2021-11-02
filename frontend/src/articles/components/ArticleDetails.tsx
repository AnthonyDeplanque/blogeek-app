import { Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import MainCard from '../../common/components/MainCard';
import { formatDate } from '../../common/services/formatDate';
import { Articles } from '../../models/Articles'


interface ArticleDetailsProps {
}

const ArticleDetails: React.FC<ArticleDetailsProps> = (props) => {
  const theme = useTheme();
  const id = useParams();
  console.log(id)



  return (<MainCard title={`${id}`}>

    <Box >
      <Typography>{id}</Typography>
    </Box >
  </MainCard>
  )
}

export default ArticleDetails;