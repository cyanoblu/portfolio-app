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
            src: './assets/images/portfolio-app.png',
            description: 'Aplicação web em Vue, esta mesmo, desenvolvida pra publicar trabalhos, projetos, e informações relevantes sobre mim para futuras referências.',
            url: 'https://github.com/cyanoblu/portfolio-app'
        } as Project,
        project2: {
            project: 'Latte Journal',
            src: './assets/images/awesome-node-app.png',
            description: 
                `Um blog desenvolvido com Node.js, a ideia do projeto é basicamente estudar 
                back-end com Node.js. A aplicação é um MVC renderizado no servidor usando ejs como view engine.
                Possuindo funcionalidades essenciais como autenticação, manipulação CRUD e parsing de conteúdo com markdown.
                `,
            url: 'https://github.com/cyanoblu/portfolio-app'
        } as Project,
    })

    const eng = ref({
        project1: {
            project: 'Portfolio',
            src: './assets/images/portfolio-app.png',
            description: 'Vue web application, yup, this one. Developed mainly for publishing my own work experiences, projects and relevant info about me for future references.',            
            url: 'https://github.com/cyanoblu/portfolio-app'

        } as Project,
        project2: {
            project: 'Latte Journal',
            src: './assets/images/awesome-node-app.png',
            description: 
                `A blog developed using Node.js, the main purpose of the project consists on building a CRUD app
                for back-end study. There's no specific end goal with the project besides experimentation. 
                The application is a MVC rendered in EJS as a view engine. Having fundamental
                features for a blog like authentication, CRUD manipulation and markdown parsing on content.`,
            url: 'https://github.com/cyanoblu/portfolio-app'
        } as Project,
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