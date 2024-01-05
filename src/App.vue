<template>
  <div></div>
  <div class="commom">
    <NavBar />
    <section id="hero"><ViewIntro /></section>
    <section id="about">dsada</section>
    <section id="experience">sdada</section>
    <section id="stack"></section>
    <section id="projects"></section>
  </div>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewIntro from '@/views/HeroView.vue'
import NavBar from '@/components/ui/NavBar.vue'

export default defineComponent({
  components: {
    ViewIntro: ViewIntro,
    NavBar: NavBar
  },

  setup() {
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
