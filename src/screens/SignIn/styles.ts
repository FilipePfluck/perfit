import styled from 'styled-components'

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

    div{
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