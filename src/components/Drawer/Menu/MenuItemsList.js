import React from "react";

import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import MenuItem from "./MenuItem";

const useStyles = makeStyles(() => ({
    padding: {
        padding: 0,
    },
}));

const DRAWER_LIST = [
    {
        route: ROUTES.main,
        literal: 'Posts',
        Icon: DashboardIcon,
    },
    {
        route: ROUTES.users,
        literal: 'Users',
        Icon: PersonIcon,
    },
]

function MenuItemsList() {
    const classes = useStyles();

    const { pathname } = useLocation();

    return (
        <Grid>
            <List className={classes.padding}>
                {DRAWER_LIST.map(({ literal, route, Icon }) => (
                    <MenuItem
                        Icon={Icon}
                        literal={literal}
                        route={route}
                        key={route}
                        selected={pathname === route}
                    />
                ))}
            </List>
        </Grid>
    );
}

export default MenuItemsList;
