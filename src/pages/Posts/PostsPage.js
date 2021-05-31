import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { loadPosts } from "../../redux/actions/postsActions";
import { loadUsers } from "../../redux/actions/usersActions";
import { loadCommentsByPostId } from "../../redux/actions/commentsActions";
import PropTypes from "prop-types";
import PostModal from "../../components/Posts/PostModal";
import PostList from "../../components/Posts/PostList";
import { useStyles } from "./styles";
import PostFilter from "../../components/Posts/PostFilter";

const PostsPage = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [postToShow, setPostToShow] = React.useState({});
  const [filteredPosts, setFilteredPosts] = React.useState([]);

  const handleClickOpen = (post) => {
    setPostToShow(post);
    props.loadCommentsByPostId(post.id).catch((error) => {
      alert("Loading Comments Failed" + error);
    });
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  useEffect(() => {
    props.loadPosts().catch((error) => {
      alert("Loading posts Failed" + error);
    });

    props.loadUsers().catch((error) => {
      alert("Loading users Failed" + error);
    });
  }, []);

  const handleChangeUsers = (id) => {
    if (id === 0) {
      setFilteredPosts(props.posts);
    } else {
      setFilteredPosts(
        props.posts.filter((post) => post.userId === parseInt(id))
      );
    }
  };

  return (
    <div>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid direction="column" container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.blogTitle}>
              Posts
            </Typography>
          </Grid>

          <PostFilter users={props.users} handleChange={handleChangeUsers} />

          <Grid container item xs={12}>
            <PostList
              posts={filteredPosts.length === 0 ? props.posts : filteredPosts}
              onClick={handleClickOpen}
            />
          </Grid>
        </Grid>
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
  const originalPosts =
    state.users.length === 0
      ? []
      : state.posts &&
        state.posts.map((post) => {
          return {
            ...post,
            userName: state.users.find((a) => a.id === post.userId).name,
          };
        });

  return {
    posts: originalPosts,
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
