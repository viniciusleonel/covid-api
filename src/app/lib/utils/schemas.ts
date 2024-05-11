
// Cria um Schema e um Type para valizadacao do formulario usando ZOD

import { z } from "zod";

export const registerCovidDataSchema = z.object({
    state: z.string().min(2, 'Estado inválido!'),
    cases: z.string().min(1, 'Casos obrigatório!'),
    confirmed: z.string().min(1, 'Confirmados obrigatório!'),
    deaths: z.string().min(1, 'Mortos obrigatório!'),
    recovered: z.string().min(1, 'Recuperados obrigatório!'),
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

