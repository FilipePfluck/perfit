import { HTMLAttributes } from 'react'

import * as S from './styles'

interface TableItemProps extends HTMLAttributes<HTMLDivElement> {
    isAvailable: boolean
}

export const TableItem: React.FC<TableItemProps> = ({isAvailable, ...rest}) => {
    return(
        <S.Container isAvailable={isAvailable} {...rest}>
            <p>{isAvailable ? 'Disponível' : 'Ocupado'}</p>
        </S.Container>
    )
}