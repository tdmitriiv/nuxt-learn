<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";
import { loadPostSingle } from "@/api/posts";

export default {
  name: "EditPost",
  layout: "admin",
  components: {
    AdminPostForm
  },
  async asyncData({ params }) {
    const loadedPost = await loadPostSingle(params.postid);

    return {
      loadedPost: {
        ...loadedPost,
        id: params.postid
      }
    };
  },
  methods: {
    onSubmit(editedPost) {
      this.$store
        .dispatch("editPost", editedPost)
        .then(result => {
          if (result && result.status === 200) {
            this.$router.push("/admin");
          }
        })
        .catch(error => console.error(error));
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
