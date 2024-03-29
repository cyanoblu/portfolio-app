<template>
  <nav id="navbar" class="navbar-wrapper transparency" :class="{ toggle: toggleOn }">
    <button id="toggle-btn" @click="toggleCollapse">
      <div id="btn-bar-container">
        <div id="btn-bar-1"></div>
        <div id="btn-bar-2"></div>
        <div id="btn-bar-3"></div>
      </div>
    </button>
    <ul :class="{ collapsed: isCollapsed }" class="navbar-list">
      <li>
        <a @click="navbarClickHandler('about')"
          ><svg>
            <text id="navAbout" x="50%" y="50%" dy=".32rem" text-anchor="middle" class="text-body">
              {{ useStore.content.navbar.about }}
            </text>
          </svg></a
        >
      </li>
      <li>
        <a @click="navbarClickHandler('experience')"
          ><svg>
            <text id="navExp" x="50%" y="50%" dy=".32rem" text-anchor="middle" class="text-body">
              {{ useStore.content.navbar.experience }}
            </text>
          </svg></a
        >
      </li>
      <li>
        <a @click="navbarClickHandler('skills')"
          ><svg>
            <text id="navSkills" x="50%" y="50%" dy=".32rem" text-anchor="middle" class="text-body">
              {{ useStore.content.navbar.skills }}
            </text>
          </svg></a
        >
      </li>
      <li>
        <a @click="navbarClickHandler('projects')"
          ><svg>
            <text
              id="navProjects"
              x="50%"
              y="50%"
              dy=".32rem"
              text-anchor="middle"
              class="text-body"
            >
              {{ useStore.content.navbar.projects }}
            </text>
          </svg></a
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useAppStore } from '@/stores/AppStore'
import { watchNavbar, watchSection } from '@/components/animations/gsap'

export default defineComponent({
  components: {},
  setup() {
    const useStore = useAppStore()
    const isCollapsed = ref(true)
    const toggleOn = ref(false)

    onMounted(() => {
      watchNavbar('#navbar')
      watchSection('#navAbout', '#about')
      watchSection('#navExp', '#experience')
      watchSection('#navSkills', '#skills')
      watchSection('#navProjects', '#projects')
      removeTransparency('navbar')
    })

    function toggleCollapse() {
      isCollapsed.value === true ? (isCollapsed.value = false) : (isCollapsed.value = true)
      toggleOn.value === true ? (toggleOn.value = false) : (toggleOn.value = true)
    }

    function navbarClickHandler(elementId: string) {
      const element = document.getElementById(elementId)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }

    function removeTransparency(elementId: string) {
      const element = document.getElementById(elementId)
      element?.classList.remove('transparency')
    }

    return { useStore, isCollapsed, toggleOn, toggleCollapse, navbarClickHandler }
  }
})
</script>

<style scoped lang="scss">
@import '../../assets/variables.scss';
#navbar {
  position: fixed;
}
.navbar-wrapper {
  background-color: var(--color-navbar);
  width: 100dvw;
  left: 0;
  height: 75px;
  margin: auto;
  display: grid;
  transition:
    height 0.3s ease,
    background-color 0.3s ease;
  z-index: 999;

  .navbar-list {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: center;

    li {
      width: fit-content;
      height: 100%;
      display: inline-flex;
      justify-content: center;

      transition: background-color 0.1s;
      &:hover {
        background-color: var(--color-background);
        .text-body {
          fill: var(--color-text);
        }
      }
      a {
        font-size: 1.5em;
        top: 7%;
        margin-top: 25px;
      }
    }
  }
}

.text-body {
  fill: var(--color-text-nav);
  stroke: var(--color-text);
  stroke-dashoffset: 0%;
  stroke-dasharray: 0% 50%;
  animation: 0.5s linear normal animate-stroke-out;
  &.active {
    animation-name: animate-stroke-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
}

.transparency {
  background-color: transparent;
  backdrop-filter: blur(6.3px);
  .text-body {
    fill: var(--color-text);
    stroke: var(--color-text);
  }
  .navbar-list {
    li {
      &:hover {
        background-color: var(--color-navbar);
        .text-body {
          fill: var(--color-text-nav);
          stroke: var(--color-text-nav);
        }
      }
    }
  }
}

svg {
  width: 150px;
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
  20% {
    fill: transparent;
  }
  100% {
    stroke-dashoffset: 0%;
    stroke-dasharray: 0% 50%;
  }
}

#toggle-btn {
  display: none;
  height: 40px;
  width: 40px;
  margin: auto;
  position: absolute;
  border: none;
}

@media (max-width: $media-size-navbar) {
  .navbar-wrapper {
    height: 40px;

    .collapsed {
      display: none;
    }
  }
  .toggle {
    height: 250px;

    #btn-bar-1 {
      width: 20px;
      height: 4px;
      animation-name: animate-menu-bar-1;
      animation-duration: $bar-btn-animation-duration;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
    #btn-bar-2 {
      width: 20px;
      height: 4px;
      top: -2px;
      left: 4px;
      animation-name: animate-menu-bar-2;
      animation-duration: $bar-btn-animation-duration;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
    #btn-bar-3 {
      width: 20px;
      height: 4px;
      top: 7px;
      left: 4px;
      animation-name: animate-menu-bar-3;
      animation-duration: $bar-btn-animation-duration;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
  }
  .navbar-list {
    flex-direction: column !important;
    li {
      margin: auto;
    }
  }
  #toggle-btn {
    display: inline;
    background-color: var(--color-navbar);
    margin-left: 4px;

    #btn-bar-container {
      position: relative;
    }
  }
  $btn-bar-margin: 4px;

  #btn-bar-1 {
    background-color: var(--color-background);
    width: 20px;
    height: 4px;
    position: absolute;
    bottom: 7px;
    left: 4px;
    border-radius: 3px;
    transform-origin: -1px 6px;
    animation-name: animate-menu-bar-1-reversed;
    animation-duration: $bar-btn-animation-duration;
    animation-timing-function: linear;
  }
  #btn-bar-2 {
    background-color: var(--color-background);
    width: 20px;
    height: 4px;
    position: absolute;
    top: -2px;
    left: 4px;
    border-radius: 3px;
    animation-name: animate-menu-bar-2-reversed;
    animation-duration: $bar-btn-animation-duration;
    animation-timing-function: linear;
  }
  #btn-bar-3 {
    background-color: var(--color-background);
    width: 20px;
    height: 4px;
    position: absolute;
    top: 7px;
    left: 4px;
    border-radius: 3px;
    transform-origin: -1px -2px;
    animation-name: animate-menu-bar-3-reversed;
    animation-duration: $bar-btn-animation-duration;
    animation-timing-function: linear;
  }
  @keyframes animate-menu-bar-1-reversed {
    0% {
      transform: rotate(45deg);
    }
    20% {
      transform: rotate(45deg);
      transform: translate(0, 9px);
    }
    80% {
      transform: translate(0, 9px);
    }
    100% {
    }
  }
  @keyframes animate-menu-bar-2-reversed {
    0% {
      transform: rotate(45deg);
    }
    20% {
      transform: rotate(0deg);
    }
    100% {
    }
  }
  @keyframes animate-menu-bar-3-reversed {
    0% {
      transform: rotate(-45deg);
    }
    20% {
      transform: rotate(-45deg);
      transform: translate(0, -9px);
    }
    80% {
      transform: translate(0, -9px);
    }
    100% {
    }
  }
  @keyframes animate-menu-bar-1 {
    0% {
    }
    20% {
      transform: translate(0, 9px);
    }
    80% {
      transform: translate(0, 9px);
    }
    100% {
      transform: rotate(45deg);
    }
  }
  @keyframes animate-menu-bar-2 {
    0% {
    }
    80% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
  @keyframes animate-menu-bar-3 {
    0% {
    }
    20% {
      transform: translate(0, -9px);
    }
    80% {
      transform: translate(0, -9px);
    }
    100% {
      transform: rotate(-45deg);
    }
  }
}
</style>
