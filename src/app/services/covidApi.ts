import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios"
import { Country } from "../Models/Country"
import { Brazil } from "../Models/Brazil"

export const covidApi: AxiosInstance = axios.create({
    baseURL: "https://covid19-brazil-api.now.sh/api/report/v1"
})

export class Covid19ApiService {

    async listCasesInBrazil(): Promise<Brazil[]> {
        try {
            const response = await covidApi.get('')
            console.log(response.data.data)
            return response.data.data
        
        } catch (error: any){
            throw new Error('Erro ao buscar dados: ' + error.message);

        }
    }

    async listAllCountries(): Promise<Country[]> {
        try {
            const response = await covidApi.get('/countries')
            console.log(response.data)
            return response.data.data
        
        } catch (error: any){
            throw new Error('Erro ao buscar dados: ' + error.message);

        }
    }
}