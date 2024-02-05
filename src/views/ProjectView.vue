<template>
  <div class="content">
    <h2>{{ useApp.content.sectionTitle.projects }}</h2>
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
import { useAppStore } from '@/stores/AppStore'

export default defineComponent({
  components: {
    Card
  },
  setup() {
    const useProject = useProjectStore()
    const useApp = useAppStore()

    return { useProject, useApp }
  }
})
</script>
<style scoped lang="scss">
@import '../assets/variables.scss';
.content {
  height: auto;
  min-height: var(--content-min-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-card-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
}

h2 {
  align-self: center;
  margin: 30px;
  font-size: 2em;
  margin-bottom: 70px;
  margin-right: 70px;
}
</style>
