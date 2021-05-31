import {makeStyles, useTheme} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => {
    const theme = useTheme();
    return {
        appBar: {
            background: '#121212',
            color: '#796d43',
        },
        icon: {
            padding: theme.spacing(1),
        },
        title: {
            margin: "auto",
        },
    }
});
