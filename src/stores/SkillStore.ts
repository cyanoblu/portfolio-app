import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useAppStore } from './AppStore'

export const useSkillStore = defineStore('skill' ,() => {

    const useApp =  useAppStore()
    const { locale } = storeToRefs(useApp)

    const content = ref({
        skill1 : {} as Skill,
    })

    const drawables = {
        javascript: './assets/svg/javascript.svg',
        typescript: './assets/svg/typescript.svg',
        python: './assets/svg/python.svg',
        html: './assets/svg/html.svg',
        css: './assets/svg/css.svg',
        oracle: './assets/svg/oracle.svg',
        vue: './assets/svg/vue.svg',
        sass: './assets/svg/sass.svg',
        nodejs: './assets/svg/nodejs.svg'

    }

    const ptbr = ref({
        skill1: {
            skill: 'Javascript',
            src: drawables.javascript
        } as Skill,
        skill2: {
            skill: 'Typescript',
            src: drawables.typescript
        } as Skill,
        skill3: {
            skill: 'Python',
            src: drawables.python
        } as Skill,
        skill4: {
            skill: 'HTML',
            src: drawables.html
        } as Skill,
        skill5: {
            skill: 'CSS',
            src: drawables.css
        } as Skill,
        skill6: {
            skill: 'PL/SQL',
            src: drawables.oracle
        } as Skill,
        skill7: {
            skill: 'Vue',
            src: drawables.vue
        } as Skill,
        skill8: {
            skill: 'Sass',
            src: drawables.sass
        } as Skill,
        skill9: {
            skill: 'Node.js',
            src: drawables.nodejs
        } as Skill,
    })

    const eng = ref({
        skill1: {
            skill: 'Javascript',
            src: drawables.javascript
        } as Skill,
        skill2: {
            skill: 'Typescript',
            src: drawables.typescript
        } as Skill,
        skill3: {
            skill: 'Python',
            src: drawables.python
        } as Skill,
        skill4: {
            skill: 'HTML',
            src: drawables.html
        } as Skill,
        skill5: {
            skill: 'CSS',
            src: drawables.css
        } as Skill,
        skill6: {
            skill: 'PL/SQL',
            src: drawables.oracle
        } as Skill,
        skill7: {
            skill: 'Vue',
            src: drawables.vue
        } as Skill,
        skill8: {
            skill: 'Sass',
            src: drawables.sass
        } as Skill,
        skill9: {
            skill: 'Node.js',
            src: drawables.nodejs
        } as Skill,
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

interface Skill {
    skill: string,
    src: string
}