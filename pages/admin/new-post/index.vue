<template>
  <div class="admin-new-post">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
        <AppControlInput
          control-type="textarea"
          v-model="editedPost.content">Content</AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel">Cancel</AppButton>
      </form>
    </section>
  </div>
</template>

<script>
import AppControlInput from '@/components/Ui/AppControlInput.vue'
import AppButton from '@/components/Ui/AppButton.vue'

export default {
  name: "index",
  components: {
    AppControlInput,
    AppButton
  },
  data () {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },
  methods: {
    onCancel () {
      this.$router.push('/admin')
    },
    onSave () {

    }
  }
}
</script>

<style scoped>

</style>
