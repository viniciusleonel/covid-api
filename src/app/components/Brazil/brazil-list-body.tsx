
// Corpo do Card que recebe a lista de paises e os exibe na tela

import { Brazil } from "../../Models/Brazil";

export default function ListBody ({
    uid, uf, state, cases, deaths, suspects, refuses, broadcast, comments, datetime
}: Brazil) {

    const formattedDatetime = new Date(datetime).toLocaleString();

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 ">
                {uid}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 ">
                {uf}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 ">
                {state}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                {cases}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                {deaths}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                {suspects}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                {refuses}
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                {formattedDatetime}
            </td>

        </tr>
    )
}