import styled from 'styled-components'

export const Container = styled.div`
    position: relative;

    span{
        width: 160px;
        background: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.title};
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: 0.4s;
        visibility: hidden;
        position: absolute;
        bottom: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);
        &::before{
            content: "";
            border-style: solid;
            border-color: ${({theme}) => theme.colors.primary} transparent;
            border-width: 6px 6px 0 6px;
            position: absolute;
            top: 100%;
            left: 55%;
            transform: translateX(-50%);
        }
    }
    &:hover span{
        opacity: 1;
        visibility: visible;
    }
`