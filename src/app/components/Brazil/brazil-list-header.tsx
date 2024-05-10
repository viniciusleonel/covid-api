export default function ListHeader () {
    return (
        <tr>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">UID
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Uf
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">State
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Cases
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Deaths
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Suspects
            </th>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Refuses
            </th>
            
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                scope="col">DateTime
            </th>
        </tr>
    )
}