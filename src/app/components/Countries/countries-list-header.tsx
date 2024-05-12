
// Cabecalho do Card com os dados a serem exibidos na tela

export default function ListHeader () {
    return (
        <tr>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">País
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Casos
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Confirmados
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Mortes
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Recuperados
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Atualizado em:
            </th>
        </tr>
    )
}