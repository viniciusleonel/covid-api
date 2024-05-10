export default function ListHeader () {
    return (
        <tr>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Country
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Cases
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Confirmed
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Deaths
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Recoverd
            </th>

            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider dark:text-gray-400"
                scope="col">Updated_at
            </th>
        </tr>
    )
}