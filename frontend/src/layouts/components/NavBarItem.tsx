import { ExpandLess, ExpandMore } from '@material-ui/icons';
import {
    Collapse,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography, useTheme
} from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { DrawerRouteConfig } from '../models/DrawerRouteConfig';


const needsToBeOpened = (pathname: any, item: DrawerRouteConfig): boolean => {

    if (pathname)
    {
        return isUrlInChildren(item, pathname);
    }
    return false;
};

const needsToBeSelected = (pathname: any, item: DrawerRouteConfig): boolean => {
    if (pathname && item.getUrl)
    {
        const url = item.getUrl();
        if (pathname === url)
        {
            return true;
        }
    }
    return false;
}

const isUrlInChildren = (parent: DrawerRouteConfig, url: any,) => {
    if (!parent.children)
    {
        return false;
    }

    for (let i = 0; i < parent.children.length; i++)
    {
        const childItem = parent.children[i];
        if (childItem.children)
        {
            if (isUrlInChildren(childItem, url))
            {
                return true;
            }
        }

        if (childItem.getUrl)
        {
            const childrenUrl = childItem.getUrl();
            if (childrenUrl === url || url.includes(childrenUrl))
            {
                return true;
            }
        }
    }
    return false;
};

interface NavBarItemProps {
    item: DrawerRouteConfig
    level: number;
}

export const transparencyColorLevelForNavBar = '99';

const NavBarItem: React.FC<NavBarItemProps> = ({ item, level }) => {

    const { pathname } = useLocation();
    const [open, setOpen] = useState(() => needsToBeOpened(pathname, item));
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const history = useHistory();
    const theme = useTheme();

    useEffect(() => {
        console.log(pathname);
        console.log(history);
        if (needsToBeOpened(pathname, item))
        {
            setOpen(true);
        }
        setIsSelected(needsToBeSelected(pathname, item));
    }, [pathname, item,]);

    const handleClick = () => {
        setOpen(!open);
        if (item.getUrl)
        {
            const url = item.getUrl();
            if (url)
            {
                history.push(url)
            }
        }
    };


    return (
        <>
            <ListItem
                key={item.id}
                button
                component='li'
                onClick={handleClick}
                selected={isSelected}
                style={isSelected
                    ? level === 0
                        //todo : change the string to a const
                        ? {
                            backgroundColor: theme.palette.secondary.light,
                            borderRadius: "0 20px 20px 0"
                        } : {
                            paddingTop: "1px",
                            paddingBottom: '1px',
                            backgroundColor: "transparent"
                        } : level !== 0
                        ? {
                            paddingTop: "1px",
                            paddingBottom: '1px',
                        } : {}
                }
            >
                {item.icon && (
                    <ListItemIcon style={{ color: theme.palette.primary.contrastText }}>
                        {item.icon}
                    </ListItemIcon>
                )}
                <ListItemText inset={!item.icon}>
                    <Box
                        display="flex"
                        flexDirection="row"
                    >
                        {/* Scrollbar pour pouvoir scroller le menu  */}
                        <Box style={
                            isSelected && level !== 0
                                ? {
                                    backgroundColor: theme.palette.secondary.light,
                                    borderRadius: "15px",
                                    padding: theme.spacing(0, 2, 0, 2)
                                } : {
                                    padding: theme.spacing(0, 2, 0, 2)
                                }
                        }
                        >
                            <Typography
                                variant="body2"
                                style={
                                    level === 0
                                        ? { color: theme.palette.primary.contrastText, fontWeight: "bold" }
                                        : { color: theme.palette.primary.contrastText, fontWeight: "normal" }
                                }>
                                {item.title}
                            </Typography>
                        </Box>

                        {item.children && item.children.length && (!open ? <ExpandMore /> : <ExpandLess />)}
                    </Box>
                </ListItemText>

            </ListItem>

            {
                item.children && Array.isArray(item.children) && (
                    <Collapse in={open} className='collapse-children'>
                        {item.children.map((item: any) => (
                            <NavBarItem item={item} level={level + 1} />
                        ))}
                    </Collapse>
                )
            }
        </>
    );
};

export default React.memo(NavBarItem);
