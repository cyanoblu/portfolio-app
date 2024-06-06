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
            about: `Sou um Desenvolvedor Full Stack e Analista de Desenvolvimento apaixonado 
                    por desafios e inovação, com experiência em personalizações de ERP, 
                    desenvolvimento de aplicativos web/mobile e criação de dashboards reativos.
                    Minha expertise inclui desenho e arquitetura de aplicações web, integração
                    de sistemas e programação em diversas tecnologias como Javascript, Typescript,
                    Python, Kotlin, Vue entre outras. Com um alto nível de proficiência em inglês
                    e formação em Análise e Desenvolvimento de Sistemas, estou sempre em busca de
                    novos conhecimentos e oportunidades para contribuir de forma significativa para
                    o crescimento e sucesso das organizações e meus clientes.`
        } as About
    })

    const eng = ref({
        about : {
            title: 'About me',
            about: `I am a passionate Full Stack Developer and Development Analyst, driven by challenges 
                    and innovation, with experience in ERP customizations,web and mobile app development, 
                    and reactive dashboard design. My expertise includes designing and architecting web 
                    applications, system integration, and programming in various technologies such as JavaScript, 
                    TypeScript, Python, Kotlin, Vue, among others. With a high level of proficiency in English 
                    and a background in Systems Analysis and Development, I am always seeking new knowledge 
                    and opportunities to contribute significantly to the growth and success of organizations 
                    and my clients.`
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
    about: String
    
}