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
        label: 'Sobre'
      },
      {
        label: 'Experiência'
      },
      {
        label: 'Skills'
      },
      {
        label: 'Projetos'
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
  height: 85px;
  display: grid;
  justify-content: center;
}
.navbar {
  color: var(--vt-c-black);
  font-size: 1.5em;
}
</style>
