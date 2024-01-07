<template>
  <div></div>
  <div class="commom">
    <NavBar />
    <section id="hero"><HeroView /></section>
    <section id="about"><AboutView /></section>
    <section id="experience"></section>
    <section id="stack"></section>
    <section id="projects"></section>
  </div>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import HeroView from '@/views/HeroView.vue'
import AboutView from '@/views/AboutView.vue'
import NavBar from '@/components/ui/NavBar.vue'
import { appStore } from './stores/AppStore'

export default defineComponent({
  components: {
    NavBar,
    HeroView,
    AboutView
  },

  setup() {
    const useStore = appStore()
    onMounted(() => {
      // TODO: setup language based on location. if [br, pt, ...] ? 'pt-br' : 'eng'
      useStore.language = 'pt-br'
    })
    return {}
  }
})
</script>
<style scoped>
.commom {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
}
</style>
