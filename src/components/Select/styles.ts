
import styled from 'styled-components'
import Tooltip from '../Tooltip'

export const Container = styled.div`
    display: flex;
    position: relative;
    select{
        border: 0;
        width: 100%;
        height: 60px;
        border-radius: 12px;
        background-color: ${({theme})=>theme.colors.inputs};
        outline: 0;
        font: 24px;
        color: #ccc;
        padding: 0 24px;
        margin-top: 12px;
    }
`

export const Error = styled(Tooltip)`
    svg {
        margin: 0;
        margin-left: 16px;
    }
    span{
        background: ${({theme}) => theme.colors.red};
        &::before{
            border-color: ${({theme}) => theme.colors.red} transparent;
        }
    }
`