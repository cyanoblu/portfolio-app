<template>
  <div class="content">
    <div class="skill-flex-item">
      <h2>{{ useApp.content.sectionTitle.skills }}</h2>
    </div>
    <div class="skill-flex-item">
      <div class="skill-wrapper">
        <div v-for="skill in useSkill.content" :key="skill.skill" class="skill">
          <img :src="skill.src" :alt="skill.skill" width="80px" />
          <h3>{{ skill.skill }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSkillStore } from '@/stores/SkillStore'
import { useAppStore } from '@/stores/AppStore'

export default defineComponent({
  setup() {
    const useSkill = useSkillStore()
    const useApp = useAppStore()
    return { useSkill, useApp }
  }
})
</script>
<style scoped lang="scss">
@import '../assets/variables.scss';
.content {
  height: var(--content-height);
  max-height: var(--content-max-height);
  min-height: var(--content-min-height);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.skill {
  font-family: Gilroy;
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
}
</style>
