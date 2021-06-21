import styled, {css} from 'styled-components'
import Tooltip from '../Tooltip'

interface ContainerProps {
    isFocused: boolean
    isErrored: boolean
}

export const Container = styled.label<ContainerProps>`
    background: ${props => props.theme.colors.inputs};
    border-radius: 10px;
    padding: 0 16px;
    width: 100%;
    margin-bottom: 8px;
    
    color: ${props => props.theme.colors.font};
    border: 2px solid ${props => props.theme.colors.inputs};
    display: flex;
    align-items: center;
    ${props => props.isErrored && css`
        border-color: ${props => props.theme.colors.red};
    `}
    ${props => props.isFocused && css`
        color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
    `}
    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: ${props => props.theme.colors.title};
        min-height: 48px;
        &::placeholder{
            color: ${props => props.theme.colors.font};
        }
    }
    svg{
        margin-right: 8px;
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