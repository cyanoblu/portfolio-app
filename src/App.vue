<template>
  <div></div>
  <div class="commom">
    <header><NavBar /></header>
    <main>
      <section id="hero"><HeroView /></section>
      <section id="about"><AboutView /></section>
      <section id="experience"><ExpView /></section>
      <section id="skills"></section>
      <section id="projects"></section>
    </main>
    <footer></footer>
  </div>
  <div></div>
</template>

<script lang="ts">
//App config
import { defineComponent, onMounted } from 'vue'
//View sections
import HeroView from '@/views/HeroView.vue'
import AboutView from '@/views/AboutView.vue'
import ExpView from '@/views/ExperienceView.vue'
//Components
import NavBar from '@/components/ui/NavBar.vue'
//Stores
import { useAppStore } from './stores/AppStore'

export default defineComponent({
  components: {
    NavBar,
    HeroView,
    AboutView,
    ExpView
  },

  setup() {
    const useStore = useAppStore()
    onMounted(() => {
      // TODO: setup language based on location. if [br, pt, ...] ? 'pt-br' : 'eng'
      useStore.locale = 'pt-br'
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

#experience {
  width: 100%;
}
</style>
