import {defineStore} from 'pinia'
import { ref, watch } from 'vue'

export const useAppStore = defineStore('app', () => {

    const locale = ref('')

    const content = ref({
        navbar: {} as NavbarHeader,
        sectionTitle: {} as SectionHeader,
        footer: {} as FooterContent
    })

    const ptbr = ref({
        navbar: {
            about: 'Sobre',
            experience: 'Experiência',
            skills: 'Habilidades',
            projects: 'Projetos'
        } as NavbarHeader,
        sectionTitle: {
            about: 'Sobre',
            experience: 'Experiência',
            skills: 'Habilidades',
            projects: 'Projetos'
        } as SectionHeader,
        footer: {
            copyright: 'todos os direitos reservados.'
        } as FooterContent
    })

    const eng = ref ({
        navbar: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects'
        } as NavbarHeader,
        sectionTitle: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects'
        } as SectionHeader,
        footer: {
            copyright: 'all rights reserved.'
        } as FooterContent
    })

    function toggleLocale() {
        locale.value === 'pt-br' ? locale.value = 'eng' : locale.value = 'pt-br';
    }

    watch(locale,() => {
        if (locale.value === "pt-br") {
            content.value = ptbr.value

        } else if (locale.value === "eng") {
            content.value = eng.value
        }
    })

    return {locale, content, toggleLocale}
})

interface NavbarHeader {
    about: string,
    experience: string,
    skills: string,
    projects: string    
}

interface SectionHeader {
    about: string,
    experience: string,
    skills: string,
    projects: string
}

interface FooterContent {
    copyright: string
}