import React from "react";

import { useStyles } from './styles';
import Drawer from "@material-ui/core/Drawer";
import MenuItemsList from "./Menu/MenuItemsList";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useDrawerContext } from "../Drawer/drawer-context";

const CustomDrawer = () => {
    const classes = useStyles();
    const { isOpened, toggleIsOpened } = useDrawerContext();
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Drawer
            variant={isLargeScreen ? "permanent" : "temporary"}
            open={!isLargeScreen && isOpened ? true : false}
            onClose={() => toggleIsOpened(!isOpened)}
            classes={{
                paper: clsx(classes.drawer, {
                    [classes.closed]: !isOpened,
                    [classes.opened]: isOpened,
                }),
            }}
        >
            <MenuItemsList />
        </Drawer>
    );
};

export default CustomDrawer;
