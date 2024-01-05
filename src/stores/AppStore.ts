import {defineStore} from 'pinia'

export const appStore = defineStore('app',{

    state: () => {
        return {
            language: 'pt-br'
        }
    }
})