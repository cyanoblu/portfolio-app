<template>
  <nav class="navbar-wrapper">
    <Menubar class="navbar" :model="menuItems" />
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Menubar from 'primevue/menubar'
import { appStore } from '@/stores/AppStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
  components: {
    Menubar
  },
  setup() {
    const AppStore = appStore()
    const { language } = storeToRefs(AppStore)
    const labels = {
      ptbr: {}
    }

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
  height: 85px;
  display: grid;
  justify-content: center;
}
.navbar {
  color: black;
  font-size: 2em;
}
.navbar ul li {
  margin: 4em;
  color: blue;
}
</style>
