<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  // local middleware
  // middleware: 'log',
  name: "PostPage",
  // async fetch (context) {
  //   if (context.store.state.loadedPosts.length > 0) {
  //     return null
  //   }
  //   const loadedPosts = await loadPosts();
  //   context.store.dispatch('setPosts', loadedPosts)
  // },
  computed: {
    loadedPosts() {
      return this.$store.state.posts.loadedPosts;
    }
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
