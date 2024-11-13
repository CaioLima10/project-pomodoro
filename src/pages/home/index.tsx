import { Play } from "phosphor-react";
import * as S from "./styles";

export function Home() {
  return (
    <S.HomeContainer>
      <form>
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="text" id="minutesAmount" />
          <span>Minutos.</span>
        </S.FormContainer>

        <S.CountDownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </S.CountDownContainer>

        <S.Button type="submit">
          <Play/>
          Começar
        </S.Button>
      </form>
    </S.HomeContainer>

  )
}
