import styled from "styled-components";

interface ContainerProps {
    isAvailable: boolean
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 38px;
    border-radius: 8px;
    padding: 8px;

    background-color: ${props => {
        return props.isAvailable 
            ? props.theme.colors.green_light
            : props.theme.colors.red_light
    }};

    color: ${props => {
        return props.isAvailable 
            ? props.theme.colors.green
            : props.theme.colors.red
    }};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`