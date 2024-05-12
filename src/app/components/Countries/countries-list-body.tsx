
// Corpo do Card que recebe a lista de paises e os exibe na tela

import { Country } from "../../Models/Country";

export default function ListBody ({
    country, cases, confirmed, deaths, recovered, updated_at
}: Country) {

    const formattedDatetime = new Date(updated_at).toLocaleString();

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                {country}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 ">
                {cases !== null ? cases : "Nenhum dado disponível"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                {confirmed}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                {deaths}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                {recovered !== null ? cases : "Nenhum dado disponível"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                {formattedDatetime}
            </td>

        </tr>
    )
}