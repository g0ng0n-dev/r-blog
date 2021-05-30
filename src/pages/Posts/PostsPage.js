import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { loadPosts } from "../../redux/actions/postsActions";
import { loadUsers } from "../../redux/actions/usersActions";
import PropTypes from "prop-types";

import { useStyles } from "./styles";
import PostList from "../../components/Posts/PostList";

const PostsPage = ({ users, posts, loadPosts, loadUsers, ...props }) => {
  const classes = useStyles();

  useEffect(() => {
    if (posts.length === 0) {
      loadPosts().catch((error) => {
        alert("Loading posts Failed" + error);
      });
    }

    if (users.length === 0) {
      loadUsers().catch((error) => {
        alert("Loading users Failed" + error);
      });
    }
  }, []);

  return (
    <div>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Posts
        </Typography>
        <PostList posts={posts} />
      </Container>
    </div>
  );
};
function mapStateToProps(state) {
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
  };
}
PostsPage.propTypes = {
  users: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  loadPosts: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  loadPosts,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
