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
  width: "100%";
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${props => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
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

`
