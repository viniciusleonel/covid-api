import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios"

export const covidApi: AxiosInstance = axios.create({
    baseURL: "https://covid19-brazil-api.now.sh/api/report/v1"
})