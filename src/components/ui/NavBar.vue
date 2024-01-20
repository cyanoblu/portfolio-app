<template>
  <nav class="navbar-wrapper" :class="{ toggle: navToggle }">
    <button id="toggle-btn" @click="toggleCollapse"></button>
    <ul :class="{ collapsed: isCollapsed }" class="navbar-list">
      <li>
        <a href=""
          ><svg>
            <text x="50%" y="50%" dy=".32rem" text-anchor="middle" class="text-body">
              {{ useStore.content.navbar.about }}
            </text>
          </svg></a
        >
      </li>
      <li>
        <a href=""
          ><svg>
            <text x="50%" y="50%" dy=".32rem" text-anchor="middle" class="text-body">
              {{ useStore.content.navbar.experience }}
            </text>
          </svg></a
        >
      </li>
      <li>
        <a href=""
          ><svg>
            <text x="50%" y="50%" dy=".32rem" text-anchor="middle" class="text-body">
              {{ useStore.content.navbar.skills }}
            </text>
          </svg></a
        >
      </li>
      <li>
        <a href=""
          ><svg>
            <text x="50%" y="50%" dy=".32rem" text-anchor="middle" class="text-body">
              {{ useStore.content.navbar.projects }}
            </text>
          </svg></a
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAppStore } from '@/stores/AppStore'

export default defineComponent({
  components: {},
  setup() {
    const useStore = useAppStore()
    const isCollapsed = ref(true)
    const navToggle = ref(false)

    function toggleCollapse() {
      isCollapsed.value === true ? (isCollapsed.value = false) : (isCollapsed.value = true)
      navToggle.value === true ? (navToggle.value = false) : (navToggle.value = true)
    }

    return { useStore, isCollapsed, navToggle, toggleCollapse }
  }
})
</script>

<style lang="scss">
@import '../../assets/variables.scss';

.navbar-wrapper {
  background-color: #0396a6;
  position: absolute;
  margin-left: -50%;
  width: 100%;
  height: 85px;
  display: grid;
  justify-content: center;
  transition: height 0.4s ease;

  .navbar-list {
    width: 70%;
    display: flex;
    visibility: visible;
    opacity: 1;
    flex-direction: row;
    list-style: none;
    margin-top: 0.5em;
    justify-content: center;
    justify-self: center;
    transition:
      visibility 0.1s,
      opacity 0.1s;
    transition-timing-function: linear;

    li {
      margin: auto;
      width: fit-content;
      a {
        font-size: 1.5em;
        color: $color-black;
      }
    }
  }
}

.text-body {
  fill: $color-black;
  stroke: $color-black;
  stroke-dashoffset: 0%;
  stroke-dasharray: 0% 50%;
  animation: 0.5s linear normal animate-stroke-out;
}

.text-body:hover {
  animation-name: animate-stroke-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

svg {
  width: fit-content;
  height: 25px;
}

svg text {
  font-weight: bold;
  stroke-width: 1.5;
}

@keyframes animate-stroke-in {
  0% {
    stroke-dashoffset: 0%;
    stroke-dasharray: 0% 50%;
  }
  20% {
    fill: transparent;
  }
  100% {
    stroke-dashoffset: 0%;
    stroke-dasharray: 50% 0;
  }
}

/* OUT */

@keyframes animate-stroke-out {
  0% {
    stroke-dashoffset: 25%;
    fill: transparent;
    stroke-dasharray: 50% 0%;
  }
  100% {
    stroke-dashoffset: 0%;
    fill: $color-black;
    stroke-dasharray: 0% 50%;
  }
}

#toggle-btn {
  display: none;
  height: 40px;
  width: 40px;
  margin: auto;
  position: absolute;
}

@media (max-width: $media-size) {
  .navbar-wrapper {
    height: 40px;

    .collapsed {
      opacity: 0;
      visibility: hidden;
    }
  }
  .toggle {
    height: 250px;
  }
  .navbar-list {
    flex-direction: column !important;
  }
  #toggle-btn {
    display: inline;
  }
}
</style>
