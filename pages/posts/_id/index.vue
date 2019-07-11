<template>
    <div class="single-post-page">
      <section class="post">
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-details">
          <div class="post-details">Last updated on {{ post.updatedDate | date }}</div>
          <div class="post-details">Written by {{ post.author }}</div>
        </div>
        <p class="post-content">{{ post.content }}</p>
      </section>
      <div class="post-feedback">
        <p>Let me know what you think about post</p>
      </div>
    </div>
</template>

<script>
import { loadPostSingle } from '@/api/posts'

export default {
  name: "index",
  async asyncData ({ params }) {
    const loadedPost = await loadPostSingle(params.id);

    return {
      post: loadedPost
    }
  }
}
</script>

<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
