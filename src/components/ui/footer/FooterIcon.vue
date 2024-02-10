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
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
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
<style lang="scss" scoped>
.btn-action {
  background-color: transparent;
  color: var(--color-text);
  border-color: transparent;
  border-style: solid;
  border-radius: 5px;
  font-family: Gilroy-light;
  font-size: 1.2em;
  min-width: 4em;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px;

  svg {
    width: 35px;
    height: 35px;
    fill: var(--color-text-footer);
  }

  &:hover {
    color: var(--color-text-footer-hover);

    svg {
      fill: var(--color-text-footer-hover);
    }
  }
}
</style>
