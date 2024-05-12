
// Cabecalho do Card com os dados a serem exibidos na tela

export default function ListHeader () {
    return (
        <tr>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">UID
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Uf
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Estado
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Casos
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Mortes
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Suspeitos
            </th>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Recusados
            </th>
            
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider "
                scope="col">Data
            </th>
        </tr>
    )
}