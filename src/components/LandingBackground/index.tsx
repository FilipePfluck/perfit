import * as S from './styles'

export const LandingBackground: React.FC = ({children}) => {
    return(
        <S.Container imageUrl="/images/background.png">
            <div>
                {children}
            </div>
        </S.Container>
    )
}