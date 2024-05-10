'use client'

import React, { useState, useEffect } from "react";
import { Covid19ApiService } from '@/app/Services/covidApi'
import Nav from "./components/nav";
import unidecode from "unidecode";
import { Brazil } from "./Models/Brazil";
import BrazilList from "./components/Brazil/brazil-list";
import { Country } from "./Models/Country";
import CountryList from "./components/Countries/countries-list";
import { maskDate } from "./lib/utils/maskDate";
import { invertDate } from "./lib/utils/invertDate";

export default function Home() {

  const [search, setSearch] = useState('')
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  const [brazilData, setBrazilData] = useState<Brazil[]>([]);
  const [brazilDataFiltered, setBrazilDataFiltered] = useState<Brazil[]>([]);
  const [brazilList, setBrazilList] = useState(false)

  const [byDateInBrazil, setByDateInBrazil] = useState<Brazil[]>([]);
  const [byDateInBrazilFiltered, setByDateInBrazilFiltered] = useState<Brazil[]>([]);
  const [byDateInBrazilList, setByDateInBrazilList] = useState(false)

  const [countriesData, setCountriesData] = useState<Country[]>([]);
  const [cuntriesDataFiltered, setCountriesFiltered] = useState<Country[]>([]);
  const [countriesList, setCountriesList] = useState(false)

  const [error, setError] = useState<string | null>(null);
  
  const covidApi = new Covid19ApiService()

  const [dataSelecionada, setDataSelecionada] = useState("");

  useEffect(() => {
    const lowerCaseSearch = unidecode(search.toLowerCase()); // Normaliza o texto de pesquisa
    const filteredDetails = byDateInBrazil.filter((detail) =>
      // Remove os caracteres especiais dos campos e faz a comparação
      unidecode(detail.uf).toLowerCase().includes(lowerCaseSearch) ||
      unidecode(detail.state).toLowerCase().includes(lowerCaseSearch) ||
      unidecode(detail.uid.toString()).includes(lowerCaseSearch) 
    );
    setByDateInBrazilFiltered(filteredDetails);
  }, [byDateInBrazil, search]);

  useEffect(() => {
    const lowerCaseSearch = unidecode(search.toLowerCase()); // Normaliza o texto de pesquisa
    const filteredDetails = brazilData.filter((detail) =>
      // Remove os caracteres especiais dos campos e faz a comparação
      detail.uf.toLowerCase().includes(lowerCaseSearch) ||
      unidecode(detail.state).toLowerCase().includes(lowerCaseSearch) ||
      detail.uid.toString().includes(lowerCaseSearch) 
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

  async function buscarCasosNoBrasil(){
    const response = await covidApi.listCasesInBrazil()
    setBrazilData(response)

    setBrazilList(true)
    setCountriesList(false)
    setByDateInBrazilList(false)
  }

  async function buscarPorPais(){
    const responde = await covidApi.listAllCountries()
    console.log(responde)
    setCountriesData(responde)

    setCountriesList(true)
    setBrazilList(false)
    setByDateInBrazilList(false)
  }

  async function getByData(data:string) {
    const response = await covidApi.listByDateinBrazil(data)
    setByDateInBrazil(response)
    setByDateInBrazilList(true)
  }

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const dataInvertida = invertDate(dataSelecionada)
    await getByData(dataInvertida);
  };

  const handleDataChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    const date = event.target.value
    const dateWithMask = maskDate(date.toString())
    setDataSelecionada(dateWithMask);
  };

  if (error) {
    return <div>{error}</div>;
  }

  const handleOpcaoSelecionada = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    const selectedOption = event.target.value;
    setOpcaoSelecionada(selectedOption);
    if (selectedOption === "paises") {
      buscarPorPais();
    } else if (selectedOption === "brasil") {
      buscarCasosNoBrasil();
    } else if (selectedOption !== "data") {
      setDataSelecionada("");
    } else if (selectedOption === "data") {
      setDataSelecionada("");
      setCountriesList(false)
      setBrazilList(false)
    } 
  };

  return (
    <>
      <Nav 
        input={
          <input
            className="bg-transparent p-1 focus:outline-none focus:none w-full"
            placeholder="Pesquisar na lista "
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      /> 
      <main className="mt-24 ms-10">
        
        <div className="my-4 flex w-full items-center justify-between">
          <div className="flex items-center gap-4 ">
            <select value={opcaoSelecionada} onChange={handleOpcaoSelecionada}
            className="p-1 border-2 rounded-lg border-cyan-700">
              <option value="">Pesquisar por:</option>
              <option value="paises">Paises</option>
              <option value="brasil">Brasil</option>
              <option value="data">Data</option>
            </select>
            {opcaoSelecionada === "data" && (
              <div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="dataInput">Insira a data:</label>
                  <input
                    className="ms-2 border-2 border-black rounded-lg p-1"
                    id="dataInput"
                    type="text"
                    value={dataSelecionada}
                    onChange={handleDataChange}
                    placeholder="DD/MM/YYYY"
                  />
                  <button type="submit">Buscar</button>
                </form>
              </div>
            )}
          </div>
          
          
        </div>

        {brazilList && (
          <BrazilList 
          search={search}
          brazilData={brazilData}
          brazilDataFiltered={brazilDataFiltered}
        />
        )}
        
        {byDateInBrazilList && (
          <BrazilList 
            search={search}
            brazilData={byDateInBrazil}
            brazilDataFiltered={byDateInBrazilFiltered}
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
