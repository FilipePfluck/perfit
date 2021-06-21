import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button } from '../../components/Button'
import { LandingBackground } from '../../components/LandingBackground'
import { LogoAndSlogan } from '../../components/LogoAndSlogan'

import * as S from './styles'

export const Home = () => {
    const { push } = useRouter()

    return(
        <LandingBackground>
            <S.Container>
            <LogoAndSlogan/>
            <S.ButtonsContainer>
                <Button 
                    text="Entrar" 
                    color="#202020"
                    textColor="#FFF"
                    onClick={()=>push('/signIn')}
                />
                <Button 
                    text="Cadastrar" 
                    color="#202020"
                    textColor="#FFF"
                    onClick={()=>push('/signUp')}
                />
            </S.ButtonsContainer>
            </S.Container>
        </LandingBackground>
    )
}