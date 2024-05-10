
// Componente completo que junta o corpo e o cabecalho do card para 
// exibir na tela a lista dos estados brasileiros


import { Brazil } from "@/app/Models/Brazil";
import ListBody from "./brazil-list-body";
import ListHeader from "./brazil-list-header";

interface BrazilListProps {
    search: string,
    brazilData: Brazil[]
    brazilDataFiltered: Brazil[]
}

export default function BrazilList ({search, brazilData, brazilDataFiltered}: BrazilListProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
                <ListHeader />
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-950 dark:divide-gray-700">
            {search === '' ? (
                brazilData.map((detail) => (
                    <ListBody 
                        key={detail.uid}
                        uid={detail.uid}
                        uf={detail.uf}
                        state={detail.state}
                        cases={detail.cases}
                        deaths={detail.deaths}
                        suspects={detail.suspects}
                        refuses={detail.refuses}
                        broadcast={detail.broadcast}
                        comments={detail.comments}
                        datetime={detail.datetime}
                    />
                ))
            ) : (
                brazilDataFiltered.map((detail) => (
                    <ListBody 
                    key={detail.uid}
                    uid={detail.uid}
                    uf={detail.uf}
                    state={detail.state}
                    cases={detail.cases}
                    deaths={detail.deaths}
                    suspects={detail.suspects}
                    refuses={detail.refuses}
                    broadcast={detail.broadcast}
                    comments={detail.comments}
                    datetime={detail.datetime}
                    />
                ))
            )}
            </tbody>
            </table>
        </div>
    )
}