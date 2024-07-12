<template>
  <div :class="$style['content']">
    <div :class="$style['experience-flex-item']">
      <TimelineExp />
    </div>
    <div :class="$style['experience-flex-item']">
      <h2>{{ useApp.content.sectionTitle.experience }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import TimelineExp from '@/components/data/TimelineExp.vue'
import { useAppStore } from '@/stores/AppStore'

const useApp = useAppStore()
</script>
<style module lang="scss">
@import '../assets/variables.scss';
.content {
  height: var(--content-height);
  max-height: var(--content-max-height);
  min-height: var(--content-min-height);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.experience-flex-item {
  max-width: 60%;
  margin: auto;
  line-height: 1.7;
  letter-spacing: 1.5px;
}

h2 {
  font-size: 2em;
}

@media (max-width: $media-size) {
  .content {
    flex-direction: column-reverse;
    margin-left: 2%;
    margin-right: 2%;
  }

  .experience-flex-item {
    max-width: 95%;
    margin: auto;
  }
}
</style>
