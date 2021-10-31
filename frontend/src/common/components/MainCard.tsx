
import { Box } from '@mui/system';
import { useTheme } from '@mui/material';
import React from 'react';
import { cardRadius } from '../theme/Theme';
import HeaderMainCard from './HeaderMainCard';
interface MainCardProps {
  title?: string;
}

const MainCard: React.FC<MainCardProps> = (props) => {
  const theme = useTheme();
  const { title } = props;
  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-start" margin={theme.spacing(2)} width="80%" borderRadius={`${cardRadius}px`} boxShadow="1px 1px 3px rgba(0,0,0,0.4)" >
      <HeaderMainCard title={title} />
      <Box>{props.children}</Box>
    </Box >
  )
}

export default MainCard;