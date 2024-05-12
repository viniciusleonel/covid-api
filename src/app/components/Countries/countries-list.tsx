
// Componente completo que junta o corpo e o cabecalho do card para exibir na tela a lista de paises

import { Country } from "@/app/Models/Country";
import ListBody from "./countries-list-body";
import ListHeader from "./countries-list-header";

interface CountryListProps {
    search: string,
    countryData: Country[]
    countryDataFiltered: Country[]
}

export default function CountryList ({search, countryData, countryDataFiltered}: CountryListProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50 dark:bg-gray-800">
                <ListHeader />
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
            {search === '' ? (
                countryData.map((detail, index) => (
                    <ListBody 
                        key={index}
                        country={detail.country}
                        cases={detail?.cases}
                        confirmed={detail.confirmed}
                        deaths={detail.deaths}
                        recovered={detail?.recovered}
                        updated_at={detail.updated_at}
                    />
                ))
            ) : (
                countryDataFiltered.map((detail, index) => (
                    <ListBody 
                        key={index}
                        country={detail.country}
                        cases={detail?.cases}
                        confirmed={detail.confirmed}
                        deaths={detail.deaths}
                        recovered={detail.recovered}
                        updated_at={detail.updated_at}
                    />
                ))
            )}
            </tbody>
            </table>
        </div>
    )
}