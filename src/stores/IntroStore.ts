import { defineStore } from 'pinia'

export const introStore = defineStore('intro', {
    state: () => { 
        return {
        eng:
        {
            salute: {
                title: "Hi, i'm Raphael", 
                subtitle: "I'm a developer"
            } as Salute
        },
        ptbr: {
            salute: {
                title: "Olá, me chamo Raphael",
                subtitle: "Sou desenvolvedor"
            } as Salute
        }
    }
    }
})

interface Salute {
    title: string,
    subtitle: string
}