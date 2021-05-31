import {makeStyles} from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => {
    const theme = useTheme();
    console.log(theme)
    return {
        footer: {
            background: '#121212',
            color: '#796d43',
            padding: theme.spacing(2),
        },
    }
});
