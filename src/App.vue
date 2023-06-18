<template>
  <router-view />
</template>

<script lang="ts">
import { useStore } from "vuex"
import { useHead } from "@vueuse/head"
import { title, description } from "@/common/content/text/commonFrases"

export default {
  name: "App",

  setup() {
    const siteData = {
      title: title,
      description: description
    }
    useHead({
      title: () => siteData.title,
      meta: [{
        name: 'description',
        content: siteData.description
      }]
    })
    const store = useStore()
    store.dispatch("startWatchBreakpoints")
  }
}
</script>
<style lang="scss">
@import "@/common/scss/style.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $header-text-color;

    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>
