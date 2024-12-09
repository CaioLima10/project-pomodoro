import { Play } from "phosphor-react";
import * as S from "./styles";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod"
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns"



const newCycleFormValidateSchema = zod.object({
  task: zod.string().min(1 , 'Informe a tarefa'),
  minutesAmount: 
    zod.number()
      .min(5, 'O ciclo precisa no minimo 5 segundos')
      .max(60, 'O ciclo precisa no maximo 60 segundos')
}) 

type newCycleFormData = zod.infer<typeof newCycleFormValidateSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
}

export function Home() { 

    const [cycles, setCycles ] = useState<Cycle[]>([])
    const [ activeCyclesId, setActiveCyclesId ] = useState<string | null>(null)
    const [ amountSecondsPassed, setAmountSecondsPassed ] = useState(0)

    const { register, handleSubmit, watch, reset} = useForm<newCycleFormData>({
      resolver: zodResolver(newCycleFormValidateSchema),
        defaultValues: {
          minutesAmount: 0,
          task: ''
        }
    })

    useEffect(() => {
      if(cycleActive){
        setInterval(() => {
          setAmountSecondsPassed(differenceInSeconds(new Date(), cycleActive.startDate))
        },1000)
      }
    },[])

  const handleCreateNewCycle = (data: newCycleFormData) => {
    const id = String(new Date().getMilliseconds())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()  
    }

    setCycles((state) => [...state, newCycle])
    setActiveCyclesId(id)

    reset()
  } 

  const cycleActive = cycles.find((cycle) => cycle.id === activeCyclesId)

  const totalSeconds = cycleActive ? cycleActive?.minutesAmount * 60 : 0

  const currentSeconds = cycleActive ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')



  const task = watch("task")
  const isSubmitDisabled = !task

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} >
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.InputDescribe 
            type="text" 
            id="task" 
            placeholder="De um nome para seu projeto" 
            list="task-suggestion"
            {...register('task')}
          />
          <datalist id="task-suggestion">
            <option value="estudo nodejs com reactjs"  />
            <option value="estudo javascript com reactjs"  />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <S.InputMinutesAmount 
            type="number" 
            id="minutesAmount" 
            placeholder="00"
            step={5}
            min={5}
            max={60}  
            {...register('minutesAmount', { valueAsNumber: true })}
            />
          <span>Minutos.</span>
        </S.FormContainer>

        <S.CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <S.Separator>:</S.Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </S.CountDownContainer>

        <S.Button disabled={isSubmitDisabled} type="submit">
          <Play size={24}/>
          Começar
        </S.Button>
      </form>
    </S.HomeContainer>

  )
}
