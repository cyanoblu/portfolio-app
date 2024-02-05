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
  max-width: 300px;
  margin-top: 20px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);
  overflow: visible;
  transition: all 0.2s;

  img {
    height: 140px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    opacity: 0.3;
    transition: all 0.2s;
  }

  h3 {
    font-family: Gilroy;
    padding: 25px;
  }

  p {
    padding: 25px;
  }

  &:hover {
    color: var(--color-navbar);

    img {
      opacity: 1;
      transform: scale(1.2);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
}
@media (prefers-color-scheme: dark) {
  .card-wrapper {
    background-color: transparent;
    border: none;
  }
}
</style>
