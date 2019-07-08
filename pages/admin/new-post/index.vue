<template>
  <div class="admin-new-post">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'

export default {
  name: "index",
  layout: 'admin',
  components: {
    AdminPostForm
  },
  methods: {
    onSubmit (postData) {
      axios.post('https://nuxt-blog-68510.firebaseio.com/posts.json', {
        ...postData,
        updatedDate: new Date()
      })
        .then(result => console.log(result))
        .catch(error => console.error(error))
    }
  }
}
</script>

<style scoped>
  .new-post-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .new-post-form {
      width: 500px;
    }
  }
</style>
