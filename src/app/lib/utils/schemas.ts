import { z } from "zod";

export const registerCovidDataSchema = z.object({
    state: z.string().min(2, 'Estado inválido!'),
    cases: z.string().min(0, 'Casos obrigatório!'),
    confirmed: z.string().min(0, 'Confirmados obrigatório!'),
    deaths: z.string().min(0, 'Mortos obrigatório!'),
    recovered: z.string().min(0, 'Recuperados obrigatório!'),
    date: z.string().min(1, 'Data obrigatória!')
});

export type RegisterCovidForm = {
    state: string;
    cases: number;
    confirmed: number;
    deaths: number;
    recovered: number;
    date: string;
};

