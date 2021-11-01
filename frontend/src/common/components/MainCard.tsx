
import { Box } from '@mui/system';
import { useTheme } from '@mui/material';
import React from 'react';
import { cardRadius } from '../theme/Theme';
import HeaderMainCard from './HeaderMainCard';
interface MainCardProps {
  title?: string;
  style?: any;
}

const MainCard: React.FC<MainCardProps> = (props) => {
  const theme = useTheme();
  const { title, style } = props;
  return (
    <Box style={style} display="flex" flexDirection="column" justifyContent="flex-start" margin={theme.spacing(2)} width="80%" borderRadius={`${cardRadius}px`} boxShadow="0px 0px 8px rgba(255,255,230,0.6)" >
      <HeaderMainCard title={title} />
      <Box padding={theme.spacing(1)}>{props.children}</Box>
    </Box >
  )
}

export default MainCard;