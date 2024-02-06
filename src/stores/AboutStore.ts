import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useAppStore } from './AppStore'

export const useAboutStore = defineStore( 'about', () => {

    const useApp =  useAppStore()
    const { locale } = storeToRefs(useApp)

    const content = ref({
        about: {} as About
    })

    const ptbr = ref({
        about : {
            title: 'Sobre',
            conjunction: 'e',
            emphasis1: 'analista de desenvolvimento',
            emphasis2: 'desenvolvedor web',
            emphasis3: 'Vue',
            emphasis4: 'ApexCharts',
            p1: 'Sou ',
            p2: ` com 2 anos de experiência no setor entregando soluções personalizadas para diferentes negócios.`,
            p3: `Participei ativamente no desenho e desenvolvimento de interfaces para avaliação de métricas
            e análise de dados utilizando `,
            p4: `Integrando soluções personalizadas no ERP
            Sankhya além de outros projetos que abrangem desde automação de coleta de dados com Python a
            análise processual em UML.`,
            p5: `Atualmente, busco aprimorar meus conhecimentos em desenvolvimento web atingindo todos os
            níveis do processo com forte afinidade em front end.`,
        } as About
    })

    const eng = ref({
        about : {
            title: 'About me',
            conjunction: 'and',
            emphasis1: 'development analyst',
            emphasis2: 'web developer',
            emphasis3: 'Vue',
            emphasis4: 'ApexCharts',
            p1: 'I am a ',
            p2: ' with 2 years of experience in the sector delivering customized solutions for different businesses.',
            p3: 'I actively participated in the design and development of interfaces for metric evaluation and data analysis using',
            p4: 'Integrating customized solutions into the ERP Sankhya, as well as other projects ranging from data collection automation with Python to process analysis in UML.',
            p5: 'Currently, I seek to enhance my knowledge in web development, reaching all levels of the process with a strong affinity for front-end.',
        } as About })

    watch(locale,() => {
        if (locale.value === "pt-br") {
            content.value = ptbr.value

        } else if (locale.value === "eng") {
            content.value = eng.value
        }
    })
    return {content}

})

interface About {
    title: string,
    conjunction: string,
    emphasis1: string,
    emphasis2: string,
    emphasis3: string,
    emphasis4: string,
    p1: string,
    p2: string,
    p3: string,
    p4: string,
    
}