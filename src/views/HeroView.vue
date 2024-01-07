<template>
  <div class="content">
    <div class="hero-flex-item">
      <div v-if="language === 'pt-br'">
        <h2>{{ ptbr.salute.intro }}</h2>
        <h1>{{ ptbr.salute.title }}</h1>
        <h2>{{ ptbr.salute.subtitle }}</h2>
      </div>
      <div v-if="language === 'eng'">
        <h2>{{ eng.salute.intro }}</h2>
        <h1>{{ eng.salute.title }}</h1>
        <h2>{{ eng.salute.subtitle }}</h2>
      </div>
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
import { heroStore } from '@/stores/HeroStore'
import { appStore } from '@/stores/AppStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const HeroStore = heroStore()
    const AppStore = appStore()
    const { eng, ptbr } = storeToRefs(HeroStore)
    const { language } = storeToRefs(AppStore)

    return { eng, ptbr, language }
  }
})
</script>
<style scoped>
.content {
  margin-top: -4em;
  height: 100dvh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

h1 {
  font-size: 4em;
  font-family: Gilroy;
}
h2 {
  font-size: 2em;
}
.hero-flex-item {
  max-width: 50%;
  margin: auto;
  padding: 5%;
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
