<template>
  <div class="content">
    <div class="about-flex-item">
      <h2>{{ useAbout.content.about.title }}</h2>
    </div>
    <div class="about-flex-item">
      <p>{{ useAbout.content.about.p1 }}</p>
      <p>
        {{ useAbout.content.about.p2 }}
        <a class="emphasis emph1">{{ useAbout.content.about.emphasis1 }}</a>
        {{ useAbout.content.about.conjunction }}
        <a class="emphasis emph2">{{ useAbout.content.about.emphasis2 }}</a
        >.
      </p>
      <p>{{ useAbout.content.about.p3 }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAboutStore } from '@/stores/AboutStore'

export default defineComponent({
  setup() {
    const useAbout = useAboutStore()
    return { useAbout }
  }
})
</script>
<style scoped lang="scss">
@import '../assets/variables.scss';
.content {
  height: 100dvh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1.1em;
}

.about-flex-item {
  max-width: 50%;
  margin: auto;
  line-height: 1.7;
  letter-spacing: 1.5px;
}

h2 {
  font-size: 2em;
}

.emphasis {
  font-family: Gilroy;
}

.emph1 {
  color: var(--color-text-emph-vue);
}

@media (max-width: $media-size) {
  .content {
    flex-direction: column;
    margin-left: 2%;
    margin-right: 2%;
  }

  .about-flex-item {
    max-width: 95%;
    margin: auto;
  }
}
</style>
