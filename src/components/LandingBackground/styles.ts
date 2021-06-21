import styled from 'styled-components'

interface ContainerProps{
    imageUrl: string
}

export const Container = styled.div<ContainerProps>`
    z-index: -4;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.imageUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    >div{
        z-index: 4;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 100vh;
        width: 100%;
        max-width: 600px;
        margin-left: auto;

        &::before{
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 100%;
            height: 100%;
            background-color: ${({theme})=>theme.colors.primary};
            filter: opacity(0.6);
        }

        @media (max-width: 600px){
            padding: 24px;
        }
    }
`