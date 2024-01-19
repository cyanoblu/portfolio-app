<template>
  <nav class="navbar-wrapper">
    <ul class="navbar-list">
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
import { defineComponent } from 'vue'
import { useAppStore } from '@/stores/AppStore'

export default defineComponent({
  components: {},
  setup() {
    const useStore = useAppStore()
    return { useStore }
  }
})
</script>

<style lang="scss">
@import '../../assets/variables.scss';

.navbar-wrapper {
  position: absolute;
  background-color: #0396a6;
  width: 100%;
  height: 85px;
  display: grid;
  justify-content: center;

  .navbar-list {
    width: 70%;
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-top: 0.5em;
    justify-content: center;
    justify-self: center;

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
  height: 20px;
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
</style>
