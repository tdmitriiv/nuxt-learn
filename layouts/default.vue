<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
  </div>
</template>
<script>
import TheHeader from "@/components/Nav/TheHeader.vue";
import TheSidenav from "@/components/Nav/TheSidenav.vue";

export default {
  // layout middleware
  // middleware: 'log',
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    };
  },
  beforeMount() {
    const colors = this.$store.state.posts.colors;
    const cssRules = [];
    const colorPrefix = "color";
    for (const color in colors) {
      cssRules.push(`.${colorPrefix}-${color} { color: ${colors[color]} }`);
    }
    const css = cssRules.join("");

    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    head.appendChild(style);
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
};
</script>
<style>
html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
