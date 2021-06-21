import { createContext, useContext, useEffect, useState } from 'react'
import Router, { useRouter} from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { api } from '../services/api'

type Credentials = {
    email: string
    password: string
}

type AuthContextData = {
    signIn: (credentials: Credentials) => Promise<void>
    signUp: (data: User) => Promise<void>
    signOut: () => void
    isAuthenticated: boolean
    user: User
}

import { User } from '../types/User'

const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel

export function signOut(){
    destroyCookie(undefined, 'perfit.token')
    destroyCookie(undefined, 'perfit.refreshToken')
    destroyCookie(undefined, 'perfit.user')

    authChannel.postMessage('signout')

    Router.push('/')
}

export function AuthProvider({children}){
    const { push } = useRouter()

    const [user, setUser] = useState<User>(()=>{
        const { 'perfit.user': user }= parseCookies()

        if(user){
            return JSON.parse(user)
        }

        return {} as User
    })

    const isAuthenticated = !!user

    async function signIn({email, password}: Credentials){
        try{
            const response = await api.post('auth/login', {
                email,
                password
            })

            const { user, access_token, refresh_token } = response.data

            setCookie(undefined, 'perfit.token', access_token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
            })
            setCookie(undefined, 'perfit.refreshToken', refresh_token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
            })
            setCookie(undefined, 'perfit.user', JSON.stringify(user), {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
            })

            setUser({
                email,
                ...user
            })

            api.defaults.headers['Authorization'] = `Bearer ${access_token}`

            push('/dashboard')
        }catch(error){
            console.log(error)
        }
    }

    async function signUp(data: User){
        try{
            const response = await api.post('/users', data)

            push('/signIn')
        }catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        authChannel = new BroadcastChannel('signout')

        authChannel.onmessage = (message) => {
            switch(message.data){
                case 'signout': 
                    signOut();
                    break;
                    
                default: 
                    break;
            }
        }
    },[])

    return(
        <AuthContext.Provider value={{signIn,isAuthenticated, user, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {return useContext(AuthContext)}