<template>
  <div class="content">
    <div class="experience-flex-item">
      <TimelineExp />
    </div>
    <div class="experience-flex-item">
      <h2>Experiência</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimelineExp from '@/components/data/TimelineExp.vue'
import { useExperienceStore } from '@/stores/ExperienceStore'

export default defineComponent({
  components: {
    TimelineExp
  },
  setup() {
    const useExperience = useExperienceStore()

    return { useExperience }
  }
})
</script>
<style scoped>
.content {
  height: 100dvh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.experience-flex-item {
  max-width: 50%;
  margin: auto;
  line-height: 1.7;
  letter-spacing: 1.5px;
}

h2 {
  font-size: 2em;
}

@media (max-width: 500px) {
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
