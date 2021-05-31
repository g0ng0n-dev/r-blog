import React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import PostComments from "./PostComments";
import { useStyles } from "./styles";

function PostModal(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const { title: title, body: body, userName: userName } = props.postToShow;

  return (
    <Dialog onClose={handleClose} open={open} scroll={"body"}>
      <DialogTitle>
        <Typography gutterBottom component="h4">
          {title}
        </Typography>
      </DialogTitle>
      <Card className={classes.card}>
        <CardActions className={classes.cardActions}>
          <CardContent>
            <Typography color="textSecondary" component="p">
              {body}
            </Typography>
            <Box className={classes.author}>
              <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <Box ml={2}>
                <Typography component="p">Author: {userName}</Typography>
                <Typography color="textSecondary" component="p">
                  May 14, 2020
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActions>

        <PostComments comments={props.commentsToShow} />
      </Card>
    </Dialog>
  );
}

PostModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  commentsToShow: PropTypes.array.isRequired,
};

export default PostModal;
