import React from "react";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const PostComments = (props) => {
  return (
    <div style={{ padding: 14 }} className="App">
      <h3>Comments: {props.comments ? props.comments.length : 0}</h3>
      {props.comments.map((comment) => {
        return (
          <Paper key={comment.id} style={{ padding: "10px 10px" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={imgLink} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                <p style={{ textAlign: "left" }}>{comment.body}</p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted 1 minute ago
                </p>
              </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          </Paper>
        );
      })}
    </div>
  );
};

export default PostComments;
