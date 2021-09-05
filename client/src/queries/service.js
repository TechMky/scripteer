import axios from 'axios';
import { QUERIES } from '.';

const service = axios.create({baseURL: QUERIES.BASE_URL, method: 'POST'})


export async function getToken(email, password) {

    const data = QUERIES.LOGIN

    data.variables.email = email
    data.variables.password = password

    try {
        const response = (await service.post('/', data)).data
        console.log("🚀 ~ file: service.js ~ line 16 ~ getToken ~ response", response)

        return {err: null, token: response.data.login.token};
        
    } catch (error) {
        console.log("🚀 ~ file: service.js ~ line 19 ~ getToken ~ error", error)
        return {err: error}
    }


}