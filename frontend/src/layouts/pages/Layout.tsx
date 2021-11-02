import { Menu } from "@material-ui/icons";
import { Drawer, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from 'react';
import Login from "../../authentication/components/Login";
import Navbar from "../components/NavBar";

interface LayoutProps { };
export const topbarHeight = 70
const Layout: React.FC<LayoutProps> = (props) => {
  const theme = useTheme();
  const [navBarOpen, setNavBarOpen] = useState<boolean>(false);

  const onItemClicked = (path: string) => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <Box display="block">
      <Box width="100%" height="100%" display="flex" flexDirection="column" margin={0} padding={0}>
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="100vw" minHeight={`${topbarHeight}px`} height={`${topbarHeight}px`} style={{ width: "100vw", backgroundColor: theme.palette.primary.dark }} >
          <Box padding={theme.spacing(0, 2, 0, 2)}><Menu fontSize="large" onClick={() => setNavBarOpen(!navBarOpen)} /> </Box>
          <Box padding={theme.spacing(0, 2, 0, 2)}><Typography variant="h2">BLOGEEK APP</Typography></Box>
        </Box>
        <Drawer anchor="left" PaperProps={{
          style: {
            marginTop: `${topbarHeight}px`,
            height: `calc(100vh - ${topbarHeight}px) !important`,
            backgroundColor: 'transparent',
            boxShadow: "none",
            overflowY: "hidden"
          }
        }} open={navBarOpen} onClose={() => setNavBarOpen(false)}>
          <Navbar onItemClicked={onItemClicked} />
        </Drawer><Box display="flex" flexDirection="row" width="100%">
          <Box display="flex" flexDirection="column" width="80%" alignItems="center" alignSelf="center" justifyContent="center">
            {props.children}
          </Box> <Box width="20%"><Login /></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Layout;