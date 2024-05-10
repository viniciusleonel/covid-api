export interface Country {
    country: string,
    cases: number | null,
    confirmed: number,
    deaths: number,
    recovered: number | null,
    updated_at: Date
}