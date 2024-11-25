import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3.5rem;
  }

`
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  color: ${props => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  
  `

const InputBase = styled.input`
    background-color: transparent;
    height: 2.5rem;

    border: none;
    border-bottom: 2px solid ${props => props.theme["gray-100"]};
    color: ${props => props.theme["gray-300"]};
    
    font-size: 1.125rem;
    padding: 0 0.5rem;

    font-weight: bold;

    &::placeholder {
      color: ${props => props.theme["gray-400"]};
    }

    &:focus{
      box-shadow: none;
      border-color: ${props => props.theme["green-500"]};
    }
`

export const InputDescribe = styled(InputBase)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
`
export const InputMinutesAmount = styled(InputBase)`
    width: 4rem;
    text-align: center;
`


export const CountDownContainer = styled.div`

  line-height: 8rem;

  font-family: 'Roboto mono', monospace;
  font-size: 10rem;
  font-weight: bold;

  display: flex;
  gap: 1rem;

  color: ${props => props.theme["gray-100"]};

  span{
    background-color: ${props => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
  
  `

export const Separator = styled.div`
  color: ${props => props.theme["green-500"]};
  padding: 2rem 0rem;
  width: 4rem;

  display: flex;
  overflow: hidden;
  justify-content: center;
`

export const Button = styled.button`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  border-radius: 8px;
  border: 0;

  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme["gray-100"]};

  &:hover {
    background-color: ${props => props.theme["green-700"]};
    cursor: pointer;
  }

  &:disabled {
    background-color: ${props => props.theme["green-700"]};
    cursor: not-allowed;
  }
`
