import axios from 'axios';
import { QUERIES } from '.';

const service = axios.create({ baseURL: QUERIES.BASE_URL, method: 'POST' })


export async function getToken(email, password) {

    const data = QUERIES.LOGIN

    data.variables.email = email
    data.variables.password = password

    try {
        const response = (await service.post('/', data)).data
        console.log("🚀 ~ file: service.js ~ line 16 ~ getToken ~ response", response)

        const accessToken = response.data.login.token
        // Set the AUTH token for any request
        service.interceptors.request.use(function (config) {
            config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
            return config;
        });

        localStorage.setItem('token', accessToken)

        return { err: null, token: accessToken };

    } catch (error) {
        console.log("🚀 ~ file: service.js ~ line 19 ~ getToken ~ error", error)
        return { err: error }
    }


}


export async function getAllBatch() {

    const data = QUERIES.BATCHES

    try {
        const response = (await service.post('/', data)).data
        console.log("🚀 ~ file: service.js ~ line 39 ~ getAllBatch ~ response", response)


        return { err: null, batches: response.data.batches.data };

    } catch (error) {
        console.log("🚀 ~ file: service.js ~ line 44 ~ getAllBatch ~ error", error)

        return { err: error }
    }


}