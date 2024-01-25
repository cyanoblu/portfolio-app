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
            emphasis1: 'Vue3',
            emphasis2: 'ApexCharts',
            p1: `Sou analista de desenvolvimento e desenvolvedor web, com 2 anos de experiência no setor
            entregando soluções personalizadas para diferentes negócios.`,
            p2: `Participei ativamente no desenho e desenvolvimento de interfaces para avaliação de métricas
            e análise de dados utilizando `,
            p3: `Integrando soluções personalizadas no ERP
            Sankhya além de outros projetos que abrangem desde automação de coleta de dados com Python a
            análise processual em UML.`,
            p4: `Atualmente, busco aprimorar meus conhecimentos em desenvolvimento web atingindo todos os
            níveis do processo com forte afinidade em front end.`,
        } as About
    })

    const eng = ref({
        about : {
            title: 'About me',
            p1: '',
            p2: '',
            p3: '',
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
    p1: string,
    p2: string,
    p3: string,
    p4: string,
    
}