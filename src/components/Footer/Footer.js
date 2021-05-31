import React from "react";

import Typography from "@material-ui/core/Typography";
import { useStyles } from './styles';

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Typography variant="h6">Copyright © 2021 - R-Blog </Typography>
        </div>
    );
}

export default Footer;
