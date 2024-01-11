import axios from "axios";



export const baseUrl = `http://localhost:4000/api/`

export const post = async (url, data) => {
    try {
        const res = await axios.post(baseUrl + url, data)
        return { statusCode: res.status, data: res.data };
    }
    catch (e) {
        console.log(e)
        return {
            statusCode: e?.response?.data?.error?.statusCode || 404,
            message: (e.response.data === undefined) ? e?.message : e?.response?.data?.error?.message
        }
    }
}

export const patch = async (url, data) => {
    try {
        const res = await axios.patch(baseUrl + url, data)
        return { statusCode: res.status, data: res.data };
    }
    catch (e) {
        console.log(e)
        return {
            statusCode: e?.response?.data?.error?.statusCode || 404,
            message: (e.response.data === undefined) ? e?.message : e?.response?.data?.error?.message
        }
    }
}

export const get = async (url) => {
    try {
        const res = await axios.get(baseUrl + url);
        return { statusCode: res.status, data: res.data }
    }
    catch (err) {
        console.log(err)
    }
}

export const deletethis = async (url) => {
    try {
        const res = await axios.delete(baseUrl + url);
        return { statusCode: res.status, data: res.data }
    }
    catch (err) {
        console.log(err)
    }
}