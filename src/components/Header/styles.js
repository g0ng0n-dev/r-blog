import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    appBar: {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
    },
    icon: {
        padding: theme.spacing(1),
    },
    title: {
        margin: "auto",
    },
}));
