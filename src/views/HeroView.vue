<template>
  <div class="content">
    <div class="hero-flex-item">
      <div v-if="language === 'pt-br'">
        <h1>{{ ptbr.salute.title }}</h1>
        <h2>{{ ptbr.salute.subtitle }}</h2>
      </div>
      <div v-if="language === 'eng'">
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
import { introStore } from '@/stores/IntroStore'
import { appStore } from '@/stores/AppStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const IntroStore = introStore()
    const AppStore = appStore()
    const { eng, ptbr } = storeToRefs(IntroStore)
    const { language } = storeToRefs(AppStore)

    return { eng, ptbr, language }
  }
})
</script>
<style scoped>
.content {
  height: 100dvh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

h1 {
  font-size: 54px;
}
h2 {
  font-size: 24px;
}
.hero-flex-item {
  max-width: 50%;
  margin: auto;
  padding: 2%;
  font-family: Gilroy;
}

@media (max-width: 500px) {
  .content {
    flex-direction: column;
    margin-left: 2%;
    margin-right: 2%;
  }

  .hero-flex-item {
    padding: auto;
  }
}
</style>
