<template>
  <div class="content">
    <div class="project-card-wrapper">
      <div v-for="project in useProject.content" :key="project.project" class="project">
        <Card
          :project="project.project"
          :src="project.src"
          :description="project.description"
          :url="project.url"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/data/DataCard.vue'
import { useProjectStore } from '@/stores/ProjectStore'

export default defineComponent({
  components: {
    Card
  },
  setup() {
    const useProject = useProjectStore()

    return { useProject }
  }
})
</script>
<style lang="scss">
@import '../assets/variables.scss';
.content {
  height: var(--content-height);
  max-height: var(--content-max-height);
  min-height: var(--content-min-height);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.project-card-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
}
</style>
