import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    footer: {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
        padding: theme.spacing(2),
    },
}));
