import axios from 'axios';
import { QUERIES } from '.';

const service = axios.create({ baseURL: QUERIES.BASE_URL, method: 'POST' })

export function setInterceptor(accessToken) {
    service.interceptors.request.use(function (config) {
        config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
        return config;
    });
}

export async function getToken(email, password) {

    const data = QUERIES.LOGIN

    data.variables.email = email
    data.variables.password = password

    try {
        const response = (await service.post('/', data)).data
        console.log("🚀 ~ file: service.js ~ line 16 ~ getToken ~ response", response)

        const accessToken = response.data.login.token
        // Set the AUTH token for any request
        setInterceptor(accessToken)

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

export async function getAllStudents(batchId) {

    const data = QUERIES.ALL_STUDENTS
    data.variables.batch_id = batchId

    try {

        const response = (await service.post('/', data)).data
        console.log("🚀 ~ file: service.js ~ line 39 ~ getAllStudents ~ response", response)


        return { err: null, students: response.data.getAllStudents.data };

    } catch (error) {
        console.log("🚀 ~ file: service.js ~ line 44 ~ getAllStudents ~ error", error)

        return { err: error }
    }


}


export async function getInstructorFeedback(instructorId, batchId) {

    const data = QUERIES.INSTRUCTOR_FEEDBACK
    data.variables.batch_id = batchId
    data.variables.instructor_id = instructorId

    try {

        const response = (await service.post('/', data)).data
        console.log("🚀 ~ file: service.js ~ line 39 ~ getInstructorFeedback ~ response", response)


        return { err: null, feedbacks: response.data.instFeedback.data };

    } catch (error) {
        console.log("🚀 ~ file: service.js ~ line 44 ~ getInstructorFeedback ~ error", error)

        return { err: error }
    }


}