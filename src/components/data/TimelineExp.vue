<template>
  <div>yes</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useExperienceStore } from '@/stores/ExperienceStore'

export default defineComponent({
  components: {},
  setup() {
    const useExperience = useExperienceStore()
    return { useExperience }
  }
})
</script>
<style scoped></style>
