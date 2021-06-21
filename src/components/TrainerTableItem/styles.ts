import styled from "styled-components";

import { transparentize } from 'polished'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    border-radius: 8px;
    padding: 8px;

    background-color: ${({theme})=> transparentize(0.8, theme.colors.primary)};
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    strong{
        font-size: 18px;
        margin-bottom: 12px;
    }
`