<template>
  <h3>{{ useApp.content.sectionTitle.skills }}</h3>
  <div class="content">
    <div v-for="skill in useSkill.content" :key="skill.skill" class="skill">
      <img :src="skill.src" :alt="skill.skill" width="80px" />
      <h3>{{ skill.skill }}</h3>
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
.content {
  height: 100dvh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.skill {
  font-family: Gilroy;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 200px;
  height: 100px;
  margin: auto;
}
</style>
