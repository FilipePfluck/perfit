import * as S from './styles'

interface TrainerTableItemProps {
    name: string,
    address: string
}

export const TrainerTableItem = ({name, address}) => {
    return(
        <S.Container>
                <strong>{name}</strong>
                <p>{address}</p>
        </S.Container>
    )
}