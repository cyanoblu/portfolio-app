<template>
  <div v-for="experience in useExperience.content" :key="experience.company" class="card">
    <div class="left">
      <h3>
        {{ experience.title }} •
        <a :href="experience.link" target="_blank">{{ experience.company }}</a>
      </h3>
      <p>{{ experience.description }}</p>
    </div>
    <div class="right">
      <h5>{{ experience.date }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExperienceStore } from '@/stores/ExperienceStore'

const useExperience = useExperienceStore()
</script>
<style scoped lang="scss">
@import '../../assets/variables.scss';

h3 {
  font-family: Poppins-Bold;
  color: var(--color-navbar);
}
.card {
  display: flex;
  flex-direction: row;
  width: inherit;
  margin-top: 40px;
  margin-bottom: 40px;
  .left {
    max-width: 70%;
  }
  .right {
    h5 {
      margin-top: 6px;
    }
  }
}

@media (max-width: $media-size) {
  .card {
    display: flex;
    flex-direction: column;
    width: inherit;

    .left {
      max-width: 100%;
    }
  }
}
</style>
