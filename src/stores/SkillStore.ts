import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useAppStore } from './AppStore'

export const useSkillStore = defineStore('skill' ,() => {

    const useApp =  useAppStore()
    const { locale } = storeToRefs(useApp)

    const content = ref({
        skill1 : {} as skill,
    })

    const ptbr = ref({
        skill1: {
            skill: 'Javascript',
            src: '/src/assets/svg/javascript.svg'
        } as skill,
        skill2: {
            skill: 'Typescript',
            src: '/src/assets/svg/typescript.svg'
        } as skill,
        skill3: {
            skill: 'Python',
            src: '/src/assets/svg/python.svg'
        } as skill,
        skill4: {
            skill: 'HTML',
            src: '/src/assets/svg/html.svg'
        } as skill,
        skill5: {
            skill: 'CSS',
            src: '/src/assets/svg/css.svg'
        } as skill,
        skill6: {
            skill: 'PL/SQL',
            src: '/src/assets/svg/oracle.svg'
        } as skill,
        skill7: {
            skill: 'Vue',
            src: '/src/assets/svg/vue.svg'
        } as skill,
        skill8: {
            skill: 'Sass',
            src: '/src/assets/svg/sass.svg'
        } as skill,
        skill9: {
            skill: 'Node.js',
            src: '/src/assets/svg/nodejs.svg'
        } as skill,
    })

    const eng = ref({
        skill1: {
            skill: 'Javascript',
            src: '/src/assets/svg/javascript.svg'
        } as skill,
        skill2: {
            skill: 'Typescript',
            src: '/src/assets/svg/typescript.svg'
        } as skill,
        skill3: {
            skill: 'Python',
            src: '/src/assets/svg/python.svg'
        } as skill,
        skill4: {
            skill: 'HTML',
            src: '/src/assets/svg/html.svg'
        } as skill,
        skill5: {
            skill: 'CSS',
            src: '/src/assets/svg/css.svg'
        } as skill,
        skill6: {
            skill: 'PL/SQL',
            src: '/src/assets/svg/oracle.svg'
        } as skill,
        skill7: {
            skill: 'Vue',
            src: '/src/assets/svg/vue.svg'
        } as skill,
        skill8: {
            skill: 'Sass',
            src: '/src/assets/svg/sass.svg'
        } as skill,
        skill9: {
            skill: 'Node.js',
            src: '/src/assets/svg/nodejs.svg'
        } as skill,
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

interface skill {
    skill: string,
    src: string
}