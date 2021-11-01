import { Menu } from "@material-ui/icons";
import { Drawer, useTheme } from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from 'react';
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
        <Box display="flex" flexDirection="row" alignItems="center" width="100vw" height={`${topbarHeight}px`} style={{ width: "100vw", backgroundColor: theme.palette.primary.dark }} >
          <Menu onClick={() => setNavBarOpen(!navBarOpen)} />
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
        </Drawer>
        <Box display="flex" flexDirection="column" alignItems="center" alignSelf="center" justifyContent="center">
          {props.children}
        </Box>
      </Box>
    </Box>
  )
}

export default Layout;