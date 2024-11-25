import * as S from "./styles"

export function History() {
  return (
    <S.TableContainer>
      <h1>Meu Histórico</h1>
      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>     
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
                <td>
                  <S.Status statusColor="green">
                    Concludo
                  </S.Status>
                </td>
            </tr>
            <tr>     
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
                <td>
                  <S.Status statusColor="green">
                    Concludo
                  </S.Status>
                </td>
            </tr>
            <tr>     
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
                <td>
                  <S.Status statusColor="yellow">
                    Em andamento
                  </S.Status>
                </td>
            </tr>
            <tr>     
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
                <td>
                  <S.Status statusColor="green">
                    Concludo
                  </S.Status>
                </td>
            </tr>
            <tr>     
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
                <td>
                  <S.Status statusColor="yellow">
                    Em andamento
                  </S.Status>
                </td>
            </tr>
            <tr>     
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
                <td>
                  <S.Status statusColor="red">
                    Interrompido
                  </S.Status>
                </td>
            </tr>
          </tbody>
        </table>
      </S.HistoryList>
    </S.TableContainer>
  );
}
