<template>
  <div></div>
  <div class="commom">
    <header><NavBar /></header>
    <main>
      <section id="hero"><HeroView /></section>
      <section id="about"><AboutView /></section>
      <section id="experience"><ExpView /></section>
      <section id="skills"><SkillView /></section>
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
import SkillView from '@/views/SkillView.vue'
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
    SkillView
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
}

#about {
  background-color: var(--color-section-about);
}

#experience {
  width: 100%;
  /* background-color: var(--color-section-exp); */
}
</style>
