<template>
  <button @click="buttonHandler(props.url)" class="btn-action" type="button">
    <svg
      width="256px"
      height="256px"
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path :d="props.icon"></path>
      </g>
    </svg>
    <div>{{ props.description }}</div>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    description: String,
    url: String,
    icon: String,
    disabled: Boolean
  },
  setup(props) {
    function buttonHandler(url: any): void {
      window.open(url, '_blank')
    }
    return { props, buttonHandler }
  }
})
</script>
<style lang="scss">
.btn-action {
  background-color: transparent;
  color: var(--color-text);
  border-color: var(--color-text);
  border-style: solid;
  border-radius: 5px;
  border-width: 2px;
  font-family: Gilroy-light;
  font-size: 1.2em;
  min-width: 8em;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;

  svg {
    width: 30px;
    fill: var(--color-text);
  }

  img {
    border-radius: 5px;
    background-color: var(--vt-c-white);
  }

  &:hover {
    color: var(--color-navbar);
    border-color: var(--color-navbar);

    svg {
      fill: var(--color-navbar);
    }
  }
}
</style>
