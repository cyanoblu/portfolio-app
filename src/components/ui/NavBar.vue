<template>
  <nav class="navbar-wrapper">
    <ul class="navbar-list">
      <li>About</li>
      <li>Experience</li>
      <li>Skills</li>
      <li>Projects</li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  setup() {
    function toggleDark(): void {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      } else {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      }
    }

    return {}
  }
})
</script>

<style lang="scss">
.navbar-wrapper {
  position: absolute;
  background-color: #0396a6;
  width: 100%;
  height: 85px;
  display: grid;
  justify-content: center;

  .navbar-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    li {
      padding: 1.5em;
      margin: auto;
    }
  }
}
</style>
