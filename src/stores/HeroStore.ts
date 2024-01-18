import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { appStore } from './AppStore'
export const useHeroStore = defineStore('hero', () => {
        /**
        *   Stores all the content for the hero section.
        *   Import language setup from the App Store and watch for changes.
        *   In case the user change the language on the website the watcher will assign the proper content accordingly.
        *   This pattern repeats on every section.
        */

        const useApp =  appStore()
        const { locale } = storeToRefs(useApp)
        
        const content = ref({
            greeting: {} as Greeting
        })
        const eng = ref({
            greeting: {
                intro: "Hi, i'm ",
                title: "Raphael", 
                subtitle: "I'm a developer"
            } as Greeting
        })
        const ptbr = ref({
            greeting: {
                intro: "Olá, me chamo ",
                title: "Raphael",
                subtitle: "Sou desenvolvedor"
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