import Link from 'next/link'
import { FiUser, FiLock, FiMail } from 'react-icons/fi'
import { useForm, SubmitHandler } from 'react-hook-form'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import * as S from './styles'

import { LandingBackground } from '../../components/LandingBackground'
import { LogoAndSlogan } from '../../components/LogoAndSlogan'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from '../../contexts/AuthContext'

const signupFormSchema = Yup.object().shape({
    email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: Yup.string().required('Senha obrigatória'),
})

interface SigninData {
    email: string,
    password: string,
}

export const SignIn = () => {
    const {
        handleSubmit,
        formState: { errors },
        control,
        setValue
    } = useForm({
        resolver: yupResolver(signupFormSchema)
    })

    const { signIn } = useAuth()

    const handleSignIn: SubmitHandler<SigninData> = async(values) => {
        console.log(values)
        await signIn(values)
    }

    return(
        <LandingBackground>
            <LogoAndSlogan/>
            <S.Form onSubmit={handleSubmit(handleSignIn)}>
                <div>
                    <Input 
                        name="email" 
                        placeholder="Digite seu email"
                        icon={FiMail}
                        control={control}
                        error={errors.email}
                    />
                    <Input 
                        name="password" 
                        type="password" 
                        placeholder="Digite sua senha"
                        icon={FiLock}
                        control={control}
                        error={errors.password}
                    />
                </div>
                <Button 
                    text="Entrar" 
                    color="#202020" 
                    textColor="#FFF"
                />
            </S.Form>
            <Link href="signUp">
                <S.StyledLink>Não possui uma conta? Cadastrar</S.StyledLink>
            </Link>
        </LandingBackground>
    )
}