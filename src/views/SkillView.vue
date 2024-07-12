<template>
  <div :class="$style['content']">
    <div :class="$style['skill-flex-item']">
      <h2>{{ useApp.content.sectionTitle.skills }}</h2>
    </div>
    <div :class="$style['skill-flex-item']">
      <div :class="$style['skill-wrapper']">
        <div v-for="skill in useSkill.content" :key="skill.skill" :class="$style['skill']">
          <img :src="skill.src" :alt="skill.skill" width="80px" />
          <h3>{{ skill.skill }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSkillStore } from '@/stores/SkillStore'
import { useAppStore } from '@/stores/AppStore'

const useSkill = useSkillStore()
const useApp = useAppStore()
</script>
<style module lang="scss">
@import '../assets/variables.scss';
.content {
  height: var(--content-height);
  max-height: var(--content-max-height);
  min-height: var(--content-min-height);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: auto;
}

.skill {
  font-family: Poppins-Bold;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 200px;
  height: 100px;
  margin: 20px;
}

.skill-flex-item {
  max-width: 80%;
  min-height: 10%;
  margin: auto;
}

.skill-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-width: 80%;
}

h2 {
  font-size: 2em;
  min-width: 100px;
}
</style>
