import styled, { css } from 'styled-components'

interface SelectableDayProps{
    isSelected: boolean
    isSmall: boolean
}

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    border-radius: 16px;
    
    display: flex;
    flex-direction: column;

    strong{
        color: ${props => props.theme.colors.title};
        font-size: 18px;
        text-align: center;
    }
`

export const Header = styled.header`
    width: 100%;
    border-radius: 16px 16px 0 0;
    padding: 16px;
    background-color: ${props => props.theme.colors.primary};

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 16px;

    @media (max-width: 900px){
        grid-template-columns: repeat(7, 1fr);
    }

    div{
        margin: auto
    }

`

export const Body = styled.div`
    width: 100%;
    border-radius: 0 0 16px 16px;
    padding: 16px;
    background-color: ${props => props.theme.colors.shape};

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 16px;

    strong{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 38px;
    }

    @media (max-width: 900px){
        grid-template-columns: 1fr 1fr;
    }
`

export const SelectableDay = styled.div<SelectableDayProps>`
    ${props => props.isSelected && css`
        background-color: ${props => props.theme.colors.shape};
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
    `}

    ${props => props.isSelected && props.isSmall && css`
        height: 32px;
        width: 32px;
        border-radius: 50%;
    `}
`