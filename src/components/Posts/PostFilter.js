import React from "react";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText,
  Grid,
  Paper,
} from "@material-ui/core";
import { useStyles } from "./styles";

const PostFilter = (props) => {
  const classes = useStyles();

  const [userId, setUserId] = React.useState(0);

  const handleChangeUsers = (event) => {
    const id = event.target.value;
    setUserId(id);
    props.handleChange(parseInt(id));
  };

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="users-native-helper">Users</InputLabel>
          <NativeSelect
            value={userId}
            onChange={handleChangeUsers}
            inputProps={{
              name: "user",
              id: "user-native-helper",
            }}
          >
            <option aria-label="None" value={0}>
              All
            </option>
            {props.users.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </NativeSelect>
          <FormHelperText>
            Select the user to filter the post by user
          </FormHelperText>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default PostFilter;
