
import { Box, List, useTheme } from '@mui/material';
import React from 'react';
import RoutesConfig from '../models/RoutesConfig';
import { topbarHeight } from '../pages/Layout';
import NavBarItem from './NavBarItem';


type LocationNavBarProps = {
    onItemClicked?: (path: string) => void;
}

export const navBarBackgroundRadius = "0 40px 0 0";

const Navbar: React.FC<LocationNavBarProps> = (props) => {

    const theme = useTheme();


    return (
        <Box
            style={{
                height: `100%`,
                width: "250px",
                backgroundColor: theme.palette.secondary.dark,
                borderRadius: navBarBackgroundRadius,
                paddingBottom: "100px",
                overflowY: "auto"

            }}>
            <List
                style={{
                    height: `100vh - ${topbarHeight}`,
                    width: "240px",
                    backgroundColor: theme.palette.secondary.dark,
                    margin: "0",
                    color: theme.palette.primary.contrastText,
                    padding: theme.spacing(5, 0, 0, 0),

                }}>
                {RoutesConfig.map((item: any) => (
                    <NavBarItem item={item} level={0} />
                ))}
            </List>
        </Box>
    );
}
export default Navbar;
