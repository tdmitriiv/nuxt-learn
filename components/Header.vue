<template>
  <header class="header">
    <ul class="nav-items">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/users">User</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #47494e;
}
.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}
.nav-items a {
  color: #fff;
  text-decoration: none;
}
.nav-items a:hover,
.nav-items a:active {
  text-decoration: underline;
}
</style>
