import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useAppStore } from './AppStore'

export const useExperienceStore = defineStore('experience' ,() => {

    const workHistory = ref([
        {
            status: 'Company',
            date: '21/11/2023 - present',
        },
        {
            status: 'Company 2',
            date: '10/07/2022 - 10/10/2022',
        },
    ])

    return {workHistory }
})