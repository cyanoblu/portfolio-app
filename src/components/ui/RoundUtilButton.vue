<template>
  <button class="utility-btn" @click="props.action">{{ props.description }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    description: String,
    action: Function
  },
  setup(props) {
    return { props }
  }
})
</script>
<style scoped lang="scss">
.utility-btn {
  background-color: transparent;
  color: var(--color-text);
  border-color: var(--color-text);
  border-style: solid;
  border-radius: 50px;
  border-width: 2px;
  font-family: Poppins-ExtraLight;
  font-size: 1em;
  width: 5em;
  min-width: fit-content;
  height: 2em;
  margin: 10px;

  &:hover {
    color: var(--color-navbar);
    border-color: var(--color-navbar);
  }
}
</style>
