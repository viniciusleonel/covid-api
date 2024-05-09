'use client'

import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/nav";
import ListHeader from "./components/list-header";
import ListBody, { AllDetails } from "./components/list-body";
import Loading from "./loading";
import EmptyListBody from "./components/empty-list-body";
import unidecode from "unidecode";

export default function Home() {
  const [details, setDetails] = useState<AllDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('')
  const [detailsFilter, setDetailsFilter] = useState<AllDetails[]>([]);

  useEffect(() => {
    const lowerCaseSearch = unidecode(search.toLowerCase()); // Normaliza o texto de pesquisa
    const filteredDetails = details.filter((detail) =>
      // Remove os caracteres especiais dos campos e faz a comparação
      unidecode(detail.uf).toLowerCase().includes(lowerCaseSearch) ||
      unidecode(detail.state).toLowerCase().includes(lowerCaseSearch) ||
      unidecode(detail.uid.toString()).includes(lowerCaseSearch)
    );
    setDetailsFilter(filteredDetails);
  }, [details, search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://covid19-brazil-api.now.sh/api/report/v1");
        setDetails(response.data.data);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
        setError("Erro ao carregar os dados. Por favor, tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Nav /> 
      <main className="mt-24 ms-10">
        <div className="container mx-auto my-8 px-4 md:px-6 flex w-full items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Covid-19 Api</h2>
          </div>
          <div>
            <input
              className="bg-transparent border-2 border-cyan-500 rounded-lg focus:outline-none focus:none w-full"
              placeholder="Procurar"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <ListHeader />
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-950 dark:divide-gray-700">
            {search === '' ? (
              details.map((detail) => (
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
              detailsFilter.map((detail) => (
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
      </main>
    </>
  );
}
