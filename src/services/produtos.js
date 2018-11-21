import { http } from './config'

export default {

    // listar
    listar:() => {
        return http.get('https://api.royaleapi.com/clan/2CCCP')
    }
}