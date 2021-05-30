import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    container: {
        display: "flex",
        flex: 1,
    },
    main: {
        flex: 1,
    },
}));
