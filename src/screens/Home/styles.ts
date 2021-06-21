import styled from 'styled-components'

export const Container = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    @media (max-width: 600px){
        padding: 0;
    }
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 48px;
`

export const Description = styled.p`
    margin-top: 24px;
    color: ${props => props.theme.colors.title};
    font-size: 18px;

`