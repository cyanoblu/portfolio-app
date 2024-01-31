import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useAppStore } from './AppStore'

export const useProjectStore = defineStore('project' ,() => {

    const useApp =  useAppStore()
    const { locale } = storeToRefs(useApp)

    const content = ref({
        project1 : {} as Project,
    })

    const ptbr = ref({
        project1: {
            project: 'Portfolio',
            src: '#',
            description: 'Aplicação web em Vue, esta mesmo, desenvolvida pra publicar trabalhos, projetos, e informações relevantes sobre mim para futuras referências.',
            url: 'https://github.com/cyanoblu/portfolio-app'
        } as Project,
        project2: {
            project: 'Latte Journal',
            src: '#',
            description: 
                `Um blog desenvolvido com Node.js, a ideia do projeto é basicamente estudar 
                back-end com Node.js. A aplicação é um MVC renderizado no servidor usando ejs como view engine.
                Possuindo funcionalidades essenciais como autenticação, manipulação CRUD e parsing de textos com markdown.`,
            url: 'https://github.com/cyanoblu/portfolio-app'
        } as Project
    })

    const eng = ref({
        project1: {
            project: 'Portfolio',
            src: '#',
            description: 'Vue web application, yup, this one. Developed mainly for publishing my own work experiences, projects and relevant info about me for future references.',            
            url: 'https://github.com/cyanoblu/portfolio-app'

        } as Project
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

interface Project {
    project: string,
    src: string,
    description: string,
    url: string,

}