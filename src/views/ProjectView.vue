<template>
  <div class="content">
    <div class="project-card-wrapper">
      <Card />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/data/DataCard.vue'

export default defineComponent({
  components: {
    Card
  },
  setup() {
    return {}
  }
})
</script>
<style lang="scss">
@import '../assets/variables.scss';
</style>
