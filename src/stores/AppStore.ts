import {defineStore} from 'pinia'
import { ref, watch } from 'vue'

export const useAppStore = defineStore('app', () => {

    const locale = ref('')

    const content = ref({
        navbar: {} as NavBarContent
    })

    const ptbr = ref({
        navbar: {
            about: 'Sobre',
            experience: 'Experiência',
            skills: 'Habilidades',
            projects: 'Projetos'
        }
    })

    const eng = ref ({
        navbar: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects'
        }
    })

    watch(locale,() => {
        if (locale.value === "pt-br") {
            content.value = ptbr.value

        } else if (locale.value === "eng") {
            content.value = eng.value
        }
    })

    return {locale, content}
})

interface NavBarContent {
    about: string,
    experience: string,
    skills: string,
    projects: string
}