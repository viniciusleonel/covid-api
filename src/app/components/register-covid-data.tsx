
// Componente para registrar dados da covid, front-end gerado pela V0

import { Label } from "@/app/components/ui/label"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { RegisterCovidForm, registerCovidDataSchema } from "@/app/lib/utils/schemas"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from "react";

export function RegisterCovidData() {

  // Estado para controle de exibicao do formulario
  const [formData, setFormData] = useState<RegisterCovidForm | null>(null);

  const {
    register: registerCovidData,
    handleSubmit: handleSubmitRegisterCovidData,
    formState: { errors: errorsCovidData }
  } = useForm<RegisterCovidForm>({
      resolver: zodResolver(registerCovidDataSchema)
  })

  // Exibe os dados do formulario na tela
  function registrarDadosCovid(data: RegisterCovidForm) {
    setFormData(data);
  }

  return (
    <div className="mx-auto max-w-md space-y-6 ">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Registro de Dados COVID-19</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Preencha os campos abaixo com as informações relacionadas à COVID-19.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmitRegisterCovidData(registrarDadosCovid)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="state">Estado</Label>
            <Input 
              id="state" 
              type="text"
              {...registerCovidData('state')}
              placeholder="Digite o estado" 
              required 
            />
            {errorsCovidData.state && <span className='text-red-500 pt-2'>{errorsCovidData.state.message}</span>}

          </div>
          <div className="space-y-2">
            <Label htmlFor="cases">Casos</Label>
            <Input 
              id="cases" 
              {...registerCovidData('cases')}
              placeholder="Digite o número de casos" 
              required 
              type="number" 
            />
            {errorsCovidData.cases && <span className='text-red-500 pt-2'>{errorsCovidData.cases.message}</span>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="confirmed">Confirmados</Label>
            <Input 
              id="confirmed" 
              {...registerCovidData('confirmed')}
              placeholder="Digite o número de confirmados" 
              required 
              type="number" 
            />
            {errorsCovidData.confirmed && <span className='text-red-500 pt-2'>{errorsCovidData.confirmed.message}</span>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="deaths">Mortos</Label>
            <Input 
              id="deaths" 
              {...registerCovidData('deaths')}
              placeholder="Digite o número de mortos" 
              required 
              type="number" 
            />
            {errorsCovidData.deaths && <span className='text-red-500 pt-2'>{errorsCovidData.deaths.message}</span>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="recovered">Recuperados</Label>
            <Input 
              id="recovered" 
              {...registerCovidData('recovered')}
              placeholder="Digite o número de recuperados" 
              required 
              type="number" 
            />
            {errorsCovidData.recovered && <span className='text-red-500 pt-2'>{errorsCovidData.recovered.message}</span>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Data</Label>
            <Input 
              id="date" 
              {...registerCovidData('date')}
              required 
              type="date" 
            />
            {errorsCovidData.date && <span className='text-red-500 pt-2'>{errorsCovidData.date.message}</span>}
          </div>
        </div>
        <Button className="w-full" type="submit">
          Enviar
        </Button>
      </form>

      {/* Exibe os dados na tela caso formData seja true */}
      {formData && (
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Dados do Formulário</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

