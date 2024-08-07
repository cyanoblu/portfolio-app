import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useAppStore } from './AppStore'
export const useHeroStore = defineStore('hero', () => {
        /**
        *   Stores all the content for the hero section.
        *   Import language setup from the App Store and watch for changes.
        *   In case the user change the language on the website the watcher will assign the proper content accordingly.
        *   This pattern repeats on every section.
        */

        const useApp =  useAppStore()
        const { locale } = storeToRefs(useApp)
        
        const content = ref({
            greeting: {} as Greeting
        })
        const eng = ref({
            greeting: {
                intro: "Hi, i'm ",
                title: "Raphael Barbosa", 
                subtitle: "I'm a full stack developer"
            } as Greeting
        })
        const ptbr = ref({
            greeting: {
                intro: "Olá, me chamo ",
                title: "Raphael Barbosa",
                subtitle: "Sou desenvolvedor Full Stack"
            } as Greeting
        })
        watch(locale,() => {
            if (locale.value === "pt-br") {
                content.value = ptbr.value

            } else if (locale.value === "eng") {
                content.value = eng.value
            }
        })
        return {
            content
        }
    })

interface Greeting {
    intro: string,
    title: string,
    subtitle: string
}