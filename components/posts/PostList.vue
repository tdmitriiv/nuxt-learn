<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg"
      title="Hello there"
      previewText="This is my first post!"
    />
    <PostPreview
      id="2"
      thumbnail="https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg"
      title="Hello there"
      previewText="This is my second post!"
    />
    <PostPreview
      id="3"
      thumbnail="https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg"
      title="Hello there"
      previewText="This is my third post!"
    />
  </section>
</template>

<script>
  import PostPreview from '@/components/posts/PostPreview'
  export default {
    name: "PostList",
    components: {
      PostPreview
    }
  }
</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
