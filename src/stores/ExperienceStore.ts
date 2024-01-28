import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useAppStore } from './AppStore'

export const useExperienceStore = defineStore('experience' ,() => {

    const useApp =  useAppStore()
    const { locale } = storeToRefs(useApp)

    const content = ref({
        experience1 : {} as experience,
    })

    const ptbr = ref({
        experience1: {
            company: 'Viferro Ferramentas',
            link: 'https://www.viferro.com.br/',
            title: 'Analista de Desenvolvimento',
            description: `Desenvolvimento e análise de sistemas, foco na experiência do usuário, criação de telas, fronts e dashboards dinâmicos e reativos
            para análise de dados integrados ao ERP local.`,
            date: '2022 - Presente'
        } as experience,
        experience2: {
            company: 'Multivix',
            link: 'https://multivix.edu.br/',
            title: 'Assistente de TI',
            description: `Suporte técnico em hardware e software e help desk pelo GLPI, ajudando na configuração de dispositivos, aprimorando habilidades
            de comunicação e resolução de problemas.`,
            date: 'Mar 2021 - Out 2021'
        } as experience
    })

    const eng = ref({
        experience1: {
            company: 'Viferro Ferramentas',
            link: 'https://www.viferro.com.br/',
            title: 'Developer Analyst',
            description: `Systems analysis and development, focusing on user experience, working on new solutions, screens, front-ends, and dynamic, reac-
            tive dashboards using Vue/TS for integrated data analysis with the local ERP.`,
            date: '2022 - Present'
        } as experience,
        experience2: {
            company: 'Multivix',
            link: 'https://multivix.edu.br/',
            title: 'IT Assitant',
            description: `Provided technical hardware support and help desk assistance utilizing the GLPI ticketing system. Proficiently assisted in device
            configuration, while actively improving communication skills and problem-solving abilities.`,
            date: 'Mar 2021 - Oct 2021'
        } as experience
    })

    watch(locale,() => {
        if (locale.value === "pt-br") {
            content.value = ptbr.value

        } else if (locale.value === "eng") {
            content.value = eng.value
        }
    })

    return { content }
})

interface experience {
    company: string,
    link: string,
    title: string,
    description: string,
    date: string
}