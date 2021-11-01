import { Typography } from '@material-ui/core';
import { useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { cardRadius, darkBackgroundColor } from '../theme/Theme';
interface HeaderMainCardProps {
  title?: string
}

const HeaderMainCard: React.FC<HeaderMainCardProps> = (props) => {
  const { title } = props;
  const theme = useTheme();
  return (


    <Box
      display="flex"
      flexDirection="column"
      alignContent="flex-start"
      paddingLeft={theme.spacing(1)}
      paddingRight={theme.spacing(1)}
      style={{
        color: darkBackgroundColor,
        textShadow: `0px 0px 5px rgba(255,255,230,0.6)`,
        background: `linear-gradient(0.15turn,${theme.palette.primary.light},${theme.palette.primary.dark})`,
        height: "70px",
        width: "100%",
        borderTopLeftRadius: cardRadius,
        borderTopRightRadius: cardRadius
      }} >
      {title && <Typography variant="h2">{title}</Typography>}
      {props.children}
    </Box>
  )
}

export default HeaderMainCard;