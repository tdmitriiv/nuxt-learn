<template>
    <div>
      <input type="text" v-model="userId">
      <button @click="loadUser">Load user</button>
      <nuxt-child />
    </div>
</template>

<script>
  export default {
    name: "users",
    layout: 'users',
    data () {
      return {
        userId: ''
      }
    },
    methods: {
      loadUser () {
        this.$router.push('/users/' + this.userId)
      }
    }
  }
</script>

<style scoped>

</style>
