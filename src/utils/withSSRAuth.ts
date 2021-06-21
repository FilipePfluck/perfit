import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { destroyCookie, parseCookies } from "nookies"

import { AuthTokenError } from "../services/errors/AuthTokenError"

type WithSSROptions = {
    permissions?: string[]
    roles?: string[]
}

export function withSSRAuth<P>(fn: GetServerSideProps<P>, options?: WithSSROptions ){
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx)

        const token = cookies['perfit.token']

        if(!token){
            return {
                redirect: {
                    destination: '/',
                    permanent: false
                }
            }
        }

        try{
            return await fn(ctx)
        }catch(error){
            if(error instanceof AuthTokenError){
                destroyCookie(ctx, 'perfit.token')
                destroyCookie(ctx, 'perfit.refreshToken')

                return {
                    redirect: {
                    destination: '/',
                    permanent: false
                    }
                }
            }

            
        }
    }
}