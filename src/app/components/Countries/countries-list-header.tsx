
// Cabecalho do Card com os dados a serem exibidos na tela

export default function ListHeader () {
    return (
        <tr>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">País
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Casos
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Confirmados
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Mortes
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Recuperados
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Atualizado em:
            </th>
        </tr>
    )
}