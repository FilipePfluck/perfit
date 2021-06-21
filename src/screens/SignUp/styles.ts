import styled, { css } from 'styled-components'

interface TypeContainerProps {
    type: 'COMMON' | 'TRAINER'
}

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
  }

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;

    overflow:scroll;
    overflow-x:hidden;
    padding: 24px 0;
`

export const Form = styled.form`
    width: 100%;
    max-width: 360px;
    margin: 32px 0;

    > div{
        margin-bottom: 24px;
    }
`

export const StyledLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${({theme})=>theme.colors.title};
    font-weight: 600;
    font-size: 18px;
    margin-top: 24px;
    transition: 0.2s;

    &:hover{
        filter: brightness(0.8);
    }
`

export const AddressTextContainer = styled.div`
    margin-top: 32px;
    margin-bottom: 24px;
    max-width: 100%;
    p{
        margin-top: 8px;
        color: ${props => props.theme.colors.font};
    }
`

export const UserTypeContainer = styled.div<TypeContainerProps>`
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4rem;
        border-radius: 0.5rem;
        border: 1px solid ${({theme})=>theme.colors.shape};
        background: ${({theme})=>theme.colors.shape};
        color: ${({theme})=>theme.colors.title};
        img{
            margin-right: 0.5rem;
            height: 20px;
            width: 20px;
        }
        transition: 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
        &#common {
            ${
                (props)=> props.type === 'COMMON' 
                
                && css `background-color: ${({theme})=>theme.colors.primary};` 
            }
        }
        
        &#trainer {
            ${
                (props)=> props.type === 'TRAINER' 
                && css `background-color: ${({theme})=>theme.colors.primary};` 
            }
        }
    }
`

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background: ${({ isActive, activeColor, theme }) => isActive
    ? theme.colors.primary
    : theme.colors.shape};
  border: 1px solid ${({theme})=>theme.colors.shape};
  border-radius: 0.25rem;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    filter: brightness(0.9);
  }
  img {
    width: 20px;
    height: 20px;
  }
  span {
    display: block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${({theme})=>theme.colors.title};
  }
`;

export const SelectContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;

    div{
        width: 48%;
    }
`