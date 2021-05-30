import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from './styles';


function MenuItem ({
                                       route,
                                       literal,
                                       Icon,
                                       selected,
                                       onClick,
                                   }){
    const classes = useStyles();

    const link = (
        <ListItem
            button
            selected={selected}
            classes={{
                selected: classes.selected,
                button: classes.button,
            }}
            onClick={onClick}
        >
            <ListItemIcon className={classes.listIcon}>
                <Icon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary={literal} />
        </ListItem>
    );
    return route ? <Link to={route}>{link}</Link> : link;
}

export default MenuItem;
