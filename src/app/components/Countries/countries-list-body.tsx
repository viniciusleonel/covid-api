import { Country } from "../../Models/Country";

export default function ListBody ({
    country, cases, confirmed, deaths, recovered, updated_at
}: Country) {

    const formattedDatetime = new Date(updated_at).toLocaleString();

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                {country}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">
                {cases !== null ? cases : "Nenhum dado disponível"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {confirmed}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {deaths}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {recovered !== null ? cases : "Nenhum dado disponível"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {formattedDatetime}
            </td>

        </tr>
    )
}