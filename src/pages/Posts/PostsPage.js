import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { loadPosts } from "../../redux/actions/postsActions";
import { loadUsers } from "../../redux/actions/usersActions";
import { loadCommentsByPostId } from "../../redux/actions/commentsActions";
import PropTypes from "prop-types";
import PostModal from "../../components/Posts/PostModal";
import PostList from "../../components/Posts/PostList";
import { useStyles } from "./styles";

const PostsPage = ({
  users,
  posts,
  loadCommentsByPostId,
  loadPosts,
  loadUsers,
  ...props
}) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [postToShow, setPostToShow] = React.useState({});

  const handleClickOpen = (post) => {
    setPostToShow(post);
    console.log(JSON.stringify(postToShow));

    loadCommentsByPostId(post.id);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  useEffect(() => {
    loadPosts().catch((error) => {
      alert("Loading posts Failed" + error);
    });

    loadUsers().catch((error) => {
      alert("Loading users Failed" + error);
    });
  }, []);

  return (
    <div>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Posts
        </Typography>
        <PostList posts={posts} onClick={handleClickOpen} />
      </Container>

      <PostModal
        postToShow={postToShow}
        commentsToShow={props.comments}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

PostsPage.propTypes = {
  comments: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  loadPosts: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  console.log(state);
  return {
    posts:
      state.users.length === 0
        ? []
        : state.posts.map((post) => {
            return {
              ...post,
              userName: state.users.find((a) => a.id === post.userId).name,
            };
          }),
    users: state.users,
    comments: !state.comments ? [] : state.comments,
  };
}

const mapDispatchToProps = {
  loadPosts,
  loadUsers,
  loadCommentsByPostId,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
