<template>
  <nav class="navbar-wrapper">
    <Menubar class="navbar" :model="menuItems" />
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Menubar from 'primevue/menubar'

export default defineComponent({
  components: {
    Menubar
  },
  setup() {
    const menuItems = ref([
      {
        label: 'yes'
      },
      {
        label: 'no'
      }
    ])

    return { menuItems }
  }
})
</script>

<style scoped>
.navbar-wrapper {
  background-color: #0396a6;
  width: 100dvw;
  height: 5em;
  display: grid;
  justify-content: center;
}
.navbar {
  color: black;
}
.navbar ul li {
  margin: 4em;
  background-color: blueviolet;
}
</style>
