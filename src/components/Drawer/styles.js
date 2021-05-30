import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    drawer: {
        background: "#D8DCD6",
        position: "static",
    },
    closed: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7) + 1,
        overflowX: "hidden",
    },
    opened: {
        width: "240px",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

