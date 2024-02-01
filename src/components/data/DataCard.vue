<template>
  <div class="card-wrapper">
    <img :src="props.src" alt="Project image" />
    <h3>{{ props.project }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    project: String,
    src: String,
    description: String,
    url: String
  },
  setup(props) {
    return { props }
  }
})
</script>
<style lang="scss">
.card-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  max-width: 200px;
}
</style>
