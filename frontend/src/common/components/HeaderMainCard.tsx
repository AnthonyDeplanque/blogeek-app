import { Typography } from '@material-ui/core';
import { useTheme } from '@mui/material';
import { Box, palette } from '@mui/system';
import React from 'react';
import { cardRadius, darkBackgroundColor, lightBackgroundColor } from '../theme/Theme';
interface HeaderMainCardProps {
  title?: string
}

const HeaderMainCard: React.FC<HeaderMainCardProps> = (props) => {
  const { title } = props;
  const theme = useTheme();
  return (


    <Box display="flex" flexDirection="column" alignContent="flex-start" style={{ color: theme.palette.primary.contrastText, backgroundColor: darkBackgroundColor, height: "70px", width: "100%", borderTopLeftRadius: cardRadius, borderTopRightRadius: cardRadius }} >
      {title && <Typography variant="h2">{title}</Typography>}
      {props.children}
    </Box>
  )
}

export default HeaderMainCard;