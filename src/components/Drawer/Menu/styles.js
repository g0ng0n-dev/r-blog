import {makeStyles} from "@material-ui/core/styles";

export const useStyles =makeStyles((theme) => ({
        button: {
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.common.white,
            },
            "&$selected": {
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.common.white,
            },
        },
        selected: {},
        listIcon: {
            minWidth: "auto",
            paddingRight: theme.spacing(2),
        },
        icon: {
            color: theme.palette.secondary.main,
        },
    })
);
