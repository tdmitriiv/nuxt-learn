export default {
  setPosts(state, posts) {
    state.loadedPosts = posts;
  },
  addPost(state, post) {
    state.loadedPosts.push(post);
  },
  editPost(state, edittedPost) {
    const findIndex = state.loadedPosts.findIndex(post => {
      return post.id === edittedPost.id;
    });
    state.loadedPosts[findIndex] = edittedPost;
  }
};
