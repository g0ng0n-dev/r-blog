import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
    padding: "10px",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
}));
