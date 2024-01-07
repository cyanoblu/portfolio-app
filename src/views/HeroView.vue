<template>
  <div class="content">
    <div class="hero-flex-item">
      <h2>{{ useHero.content.greeting.intro }}</h2>
      <h1>{{ useHero.content.greeting.title }}</h1>
      <h2>{{ useHero.content.greeting.subtitle }}</h2>
    </div>
    <div class="hero-flex-item">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Sagittis orci a
        scelerisque purus semper eget duis at. Pulvinar mattis nunc sed blandit libero volutpat sed
        cras.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useHeroStore } from '@/stores/HeroStore'

export default defineComponent({
  setup() {
    const useHero = useHeroStore()
    return { useHero }
  }
})
</script>
<style scoped>
.content {
  margin-top: -4em;
  height: 100dvh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
h1 {
  font-size: 5em;
  font-family: Gilroy;
}
h2 {
  font-size: 2em;
}
.hero-flex-item {
  max-width: 50%;
  /* padding: 5%; */
  margin: auto;
}

@media (max-width: 500px) {
  .content {
    flex-direction: column;
    margin-left: 2%;
    margin-right: 2%;
  }

  .hero-flex-item {
    max-width: 95%;
    margin: auto;
    padding: auto;
  }
}
</style>
@/stores/heroStore
