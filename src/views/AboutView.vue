<template>
  <div class="content">
    <div class="about-flex-item">
      <h2>{{ useApp.content.sectionTitle.about }}</h2>
    </div>
    <div class="about-flex-item">
      <p>
        {{ useAbout.content.about.about }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAboutStore } from '@/stores/AboutStore'
import { useAppStore } from '@/stores/AppStore'

export default defineComponent({
  setup() {
    const useAbout = useAboutStore()
    const useApp = useAppStore()
    return { useAbout, useApp }
  }
})
</script>
<style scoped lang="scss">
@import '../assets/variables.scss';
.content {
  color: var(--vt-c-text-light-2);
  height: var(--content-height);
  max-height: var(--content-max-height);
  min-height: var(--content-min-height);
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
  font-family: Poppins-Bold;
  color: var(--pt-c-primary-color);
}

.emph3 {
  color: var(--color-text-emph-vue);
}

.emph4 {
  color: var(--pt-c-text-apexcharts);
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
