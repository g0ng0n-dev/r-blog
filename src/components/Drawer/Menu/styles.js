import {makeStyles} from "@material-ui/core/styles";

export const useStyles =makeStyles((theme) => ({
        button: {
            "&:hover": {
                backgroundColor: '#796d43',
                color: theme.palette.common.white,
            },
            "&$selected": {
                backgroundColor: '#121212',
                color: theme.palette.common.white,
            },
        },
        selected: {},
        listIcon: {
            minWidth: "auto",
            paddingRight: theme.spacing(2),
        },
        icon: {
            color: '#796d43',
        },
    })
);
