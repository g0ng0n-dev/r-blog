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

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const { title: title, body: body, userName: userName } = props.postToShow;

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
      <Card className={classes.card}>
        <CardActions className={classes.cardActions}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
            <Box className={classes.author}>
              <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <Box ml={2}>
                <Typography variant="subtitle2" component="p">
                  Author: {userName}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                >
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
};

export default PostModal;
