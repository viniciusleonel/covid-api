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
import { RegisterCovidData } from "./components/register-covid-data";

export default function Home() {

  // Controle de inputs e do select para exibicao dos cards
  const [search, setSearch] = useState('')
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  // Controle de exibicao dos componentes relacionados aos dados do Brasil
  const [brazilData, setBrazilData] = useState<Brazil[]>([]);
  const [brazilDataFiltered, setBrazilDataFiltered] = useState<Brazil[]>([]);
  const [brazilList, setBrazilList] = useState(false)

    // Controle de exibicao dos componentes de busca por data no Brasil
  const [byDateInBrazil, setByDateInBrazil] = useState<Brazil[]>([]);
  const [byDateInBrazilFiltered, setByDateInBrazilFiltered] = useState<Brazil[]>([]);
  const [byDateInBrazilList, setByDateInBrazilList] = useState(false)

    // Controle de exibicao dos componentes relacionados aos dados de todos os paises
  const [countriesData, setCountriesData] = useState<Country[]>([]);
  const [cuntriesDataFiltered, setCountriesFiltered] = useState<Country[]>([]);
  const [countriesList, setCountriesList] = useState(false)

  // Controle de exibicao do formulario para registro de dados da covid
  const [registerCovidData, setRegisterCovidData] = useState(false)

  const [error, setError] = useState<string | null>(null);
  
  // Instancia da Covid-19-API-Service
  const covidApi = new Covid19ApiService()

  // Filtragem da lista da busca dos dados por data
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

  // Filtrage da lista dos estados brasileiros
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

  // Filtragem da lista dos paises
  useEffect(() => {
    const lowerCaseSearch = unidecode(search.toLowerCase()); // Normaliza o texto de pesquisa
    const filteredDetails = countriesData.filter((detail) =>
      // Remove os caracteres especiais dos campos e faz a comparação
      unidecode(detail.country).toLowerCase().includes(lowerCaseSearch) 
    );
    setCountriesFiltered(filteredDetails);
  }, [countriesData, search]);

  // Req GET para listar os casos nos estados brasileiros
  async function listarCasosNoBrasil(){
    const response = await covidApi.listCasesInBrazil()
    setBrazilData(response)

    // Controle de exibicao de componentes
    setBrazilList(true)
    setCountriesList(false)
    setByDateInBrazilList(false)
    setRegisterCovidData(false)
  }

  // Req GET para listar os casos nos paises
  async function listarPaises(){
    const response = await covidApi.listAllCountries()
    setCountriesData(response)

    // Controle de exibicao de componentes
    setCountriesList(true)
    setBrazilList(false)
    setByDateInBrazilList(false)
    setRegisterCovidData(false)

  }

  // Req GET para listar os casos nos estados brasileiros em uma data especifica
  async function getByData(data:string) {
    if (data === '') {
      setError('Insira uma Data')
    } else {
      const response = await covidApi.listByDateinBrazil(data)
      setByDateInBrazil(response)
      setByDateInBrazilList(true)
    }
    
  }

  // Input da data utilizando uma mascara para formatacao
  const handleDataChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    const date = event.target.value
    const dateWithMask = maskDate(date.toString())
    setDataSelecionada(dateWithMask);
  };

  // Enviando Req GET por uma data especifica digitada no Input
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    setError('')
    // Inverte a data para o formato adequado da API
    const dataInvertida = invertDate(dataSelecionada)
    await getByData(dataInvertida);
  };

  // Controle de exibicao do formulario de registro de dados da covid
  function exibirForm ( ) {
    setRegisterCovidData(!registerCovidData)

    // Controle de exibicao de componentes
    setCountriesList(false)
    setBrazilList(false)
    setOpcaoSelecionada('')
    setByDateInBrazilList(false)
  }

  // Controle de opcao do Select
  const handleOpcaoSelecionada = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    const selectedOption = event.target.value;
    setOpcaoSelecionada(selectedOption);

    if (selectedOption === "paises") {
      // Lista todos os paises
      listarPaises();

    } else if (selectedOption === "brasil") {
      // Lista Casos no Brasil
      listarCasosNoBrasil();

    } else if (selectedOption === "data") {
      // Exibe o input para insercao da data
      setDataSelecionada("");
      setCountriesList(false)
      setBrazilList(false)
      setRegisterCovidData(false)
    } 
  };

  return (
    <>
    {/* Component Nav */}
      <Nav 
        input={
          <input
            className="bg-transparent p-1 border-2 rounded-lg border-cyan-700 focus:outline-none focus:border-cyan-500 w-full"
            placeholder="Pesquisar na lista "
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      /> 
      <main className="mt-24 ms-10">
        
        <div className="my-4 flex w-full items-center gap-4">
          <button onClick={exibirForm} className="bg-cyan-400 p-1 rounded-lg ms-1 ps-2 pe-10 border-2 border-black font-medium hover:bg-cyan-500">Cadastrar</button>

          <div className="flex items-center gap-4 ">
            <select value={opcaoSelecionada} onChange={handleOpcaoSelecionada}
            className="p-[5px] font-medium border-2 rounded-lg border-cyan-700">
              <option value="">Pesquisar por:</option>
              <option value="paises" className="border-2 rounded-lg border-cyan-700">Paises</option>
              <option value="brasil">Brasil</option>
              <option value="data">Data</option>
            </select>

            {/* Exibe input para insercao da data para Req Get */}
            {opcaoSelecionada === "data" && (
              <div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="dataInput">Insira a data:</label>
                  <input
                    className="ms-2 border-2 border-cyan-700 rounded-lg p-1 focus:outline-none focus:border-cyan-500"
                    id="dataInput"
                    type="text"
                    value={dataSelecionada}
                    onChange={handleDataChange}
                    placeholder="DD/MM/YYYY"
                  />
                  <button type="submit" className="bg-cyan-400 p-1 rounded-lg ms-1 ps-2 pe-10 border-2 border-black font-medium hover:bg-cyan-500">Buscar</button>
                </form>
                {error && (
                  <span className='text-red-500 pt-2'>
                    {error}
                  </span>
                )}
              </div>
            )}
            
          </div>
        </div>

        {/*  Exibe listagem dos estados brasileiros  */}
        {brazilList && (
          <BrazilList 
          search={search}
          brazilData={brazilData}
          brazilDataFiltered={brazilDataFiltered}
        />
        )}
        
        {/* Exibe resultado da filtragem por data */}
        {byDateInBrazilList && (
          <BrazilList 
            search={search}
            brazilData={byDateInBrazil}
            brazilDataFiltered={byDateInBrazilFiltered}
        />
        )}

        {/* Exibe resultado da listagem de paises */}
        {countriesList && (
          <CountryList 
            search={search}
            countryData={countriesData}
            countryDataFiltered={cuntriesDataFiltered}
        />
        )}

          {/* Exibe o formulario de registro de dados da covid */}
          {registerCovidData && (
            <RegisterCovidData />
          )}

      </main>
    </>
  );
}
