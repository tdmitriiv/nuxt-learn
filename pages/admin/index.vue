<template>
    <div class="admin-page">
      <section class="new-post">
        <AppButton @click="createPost">Create Post</AppButton>
      </section>
      <section class="existing-posts">
        <h1>Existing Posts</h1>
        <PostList isAdmin :posts="loadedPosts" />
      </section>
    </div>
</template>

<script>
import PostList from '@/components/posts/PostList'
import AppButton from '@/components/Ui/AppButton'

export default {
  name: "index",
  layout: 'admin',
  components: {
    PostList,
    AppButton
  },
  computed: {
    loadedPosts () {
      return this.$store.state.posts.loadedPosts
    }
  },
  methods: {
    createPost () {
      this.$router.push('/admin/new-post')
    }
  }
}
</script>

<style scoped>
  .admin-page {
    padding: 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts h1 {
    text-align: center;
  }
</style>
