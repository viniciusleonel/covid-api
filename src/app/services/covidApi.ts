import axios, { AxiosInstance } from "axios"
import { Country } from "../Models/Country"
import { Brazil } from "../Models/Brazil"


// Estabelece um link base para fazer requisicoes
export const covidApi: AxiosInstance = axios.create({
    baseURL: "https://covid19-brazil-api.now.sh/api/report/v1"
})

export default class Covid19ApiService {

    // Req para listar todos os casos no Brasil
    async listCasesInBrazil(): Promise<Brazil[]> {
        try {
            const response = await covidApi.get('')
            console.log(response.data.data)
            return response.data.data
        
        } catch (error: any){
            throw new Error('Erro ao buscar dados: ' + error.message);

        }
    }

    // Req para listar casos em todos os paises
    async listAllCountries(): Promise<Country[]> {
        try {
            const response = await covidApi.get('/countries')
            return response.data.data
        
        } catch (error: any){
            throw new Error('Erro ao buscar dados: ' + error.message);

        }
    }

    // Req para listar os casos no Brasil por uma data especifica
    async listByDateinBrazil(date: string): Promise<Brazil[]> {
        try {
            const response = await covidApi.get(`/brazil/${date}`)
            console.log(response.data.data)
            return response.data.data
        
        } catch (error: any){
            throw new Error('Erro ao buscar dados: ' + error.message);

        }
    }
    
}