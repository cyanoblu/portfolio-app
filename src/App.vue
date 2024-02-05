<template>
  <header><NavBar id="navbar" /></header>
  <main>
    <section id="hero"><HeroView /></section>
    <section id="about"><AboutView /></section>
    <section id="experience"><ExpView /></section>
    <section id="skills"><SkillView /></section>
    <section id="projects"><ProjectView /></section>
  </main>
  <footer></footer>
</template>

<script lang="ts">
//App config
import { defineComponent, onMounted } from 'vue'
//View sections
import HeroView from '@/views/HeroView.vue'
import AboutView from '@/views/AboutView.vue'
import ExpView from '@/views/ExperienceView.vue'
import SkillView from '@/views/SkillView.vue'
import ProjectView from '@/views/ProjectView.vue'
//Components
import NavBar from '@/components/ui/NavBar.vue'
//Stores
import { useAppStore } from './stores/AppStore'

export default defineComponent({
  components: {
    NavBar,
    HeroView,
    AboutView,
    ExpView,
    SkillView,
    ProjectView
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
<style scoped lang="scss">
#navbar {
  position: fixed;
}

#about {
  background-color: var(--color-section-about);
}
</style>
