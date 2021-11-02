import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import { Box, Typography } from "@mui/material";
import { Loop } from "@material-ui/icons";

const useStyles = makeStyles(() =>
  createStyles({
    rotateIcon: {
      animation: "$spin 1s linear infinite"
    },
    "@keyframes spin": {
      "0%": {
        transform: "rotate(360deg)"
      },
      "100%": {
        transform: "rotate(0deg)"
      }
    }
  })
);

const Loading: React.FC = () => {

  const rotateClass = useStyles();
  return (
    <Box display="flex" flexDirection='row' alignItems="center">
      <Loop className={rotateClass.rotateIcon} /><Typography> NOW LOADING</Typography><Loop className={rotateClass.rotateIcon} />
    </Box>
  )
}
export default Loading;