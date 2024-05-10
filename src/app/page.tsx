'use client'

import React, { useState, useEffect } from "react";
import { Covid19ApiService } from '@/app/Services/covidApi'
import Nav from "./components/nav";
import Loading from "./loading";
import unidecode from "unidecode";
import { Brazil } from "./Models/Brazil";
import BrazilList from "./components/Brazil/brazil-list";
import { Country } from "./Models/Country";
import CountryList from "./components/Countries/countries-list";

export default function Home() {

  const [search, setSearch] = useState('')

  const [brazilData, setBrazilData] = useState<Brazil[]>([]);
  const [brazilDataFiltered, setBrazilDataFiltered] = useState<Brazil[]>([]);
  const [brazilList, setBrazilList] = useState(false)

  const [countriesData, setCountriesData] = useState<Country[]>([]);
  const [cuntriesDataFiltered, setCountriesFiltered] = useState<Country[]>([]);
  const [countriesList, setCountriesList] = useState(false)

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const covidApi = new Covid19ApiService()

  useEffect(() => {
    const lowerCaseSearch = unidecode(search.toLowerCase()); // Normaliza o texto de pesquisa
    const filteredDetails = brazilData.filter((detail) =>
      // Remove os caracteres especiais dos campos e faz a comparação
      unidecode(detail.uf).toLowerCase().includes(lowerCaseSearch) ||
      unidecode(detail.state).toLowerCase().includes(lowerCaseSearch) ||
      unidecode(detail.uid.toString()).includes(lowerCaseSearch)
    );
    setBrazilDataFiltered(filteredDetails);
  }, [brazilData, search]);

  useEffect(() => {
    const lowerCaseSearch = unidecode(search.toLowerCase()); // Normaliza o texto de pesquisa
    const filteredDetails = countriesData.filter((detail) =>
      // Remove os caracteres especiais dos campos e faz a comparação
      unidecode(detail.country).toLowerCase().includes(lowerCaseSearch) 
    );
    setCountriesFiltered(filteredDetails);
  }, [countriesData, search]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://covid19-brazil-api.now.sh/api/report/v1");
  //       setDetails(response.data.data);
  //     } catch (error) {
  //       console.error("Erro ao obter dados:", error);
  //       setError("Erro ao carregar os dados. Por favor, tente novamente mais tarde.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  async function buscarCasosNoBrasil(){
    const response = await covidApi.listCasesInBrazil()
    setBrazilData(response)
    setBrazilList(true)
    setCountriesData([])
    setCountriesList(false)
  }

  async function buscarPorPais(){
    const responde = await covidApi.listAllCountries()
    console.log(responde)
    setCountriesData(responde)
    setCountriesList(true)
    setBrazilData([])
    setBrazilList(false)
  }

  // if (loading) {
  //   return <Loading />;
  // }

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
          <button
              onClick={buscarPorPais}
            >Paises</button>
            <button
              onClick={buscarCasosNoBrasil}
            >Brasil</button>
          </div>
          <div>
            <input
              className="bg-transparent border-2 border-cyan-500 rounded-lg focus:outline-none focus:none w-full"
              placeholder="Procurar "
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        

        {brazilList && (
          <BrazilList 
          search={search}
          brazilData={brazilData}
          brazilDataFiltered={brazilDataFiltered}
        />
        )}
        

        {countriesList && (
          <CountryList 
            search={search}
            countryData={countriesData}
            countryDataFiltered={cuntriesDataFiltered}
        />
        )}

      </main>
    </>
  );
}
