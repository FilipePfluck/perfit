import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { DefaultTheme } from 'styled-components'
import { Dashboard } from '../src/screens/Dashboard'
import { TrainerDashboard } from '../src/screens/TrainerDashboard'
import { User } from '../src/types/User'
import { withSSRAuth } from '../src/utils/withSSRAuth'

interface Props {
    user: User
}

export default function DashboardPage({user, theme}){
    return user.type === 'COMMON' ? (
        <Dashboard/>
    ):(
        <TrainerDashboard/>
    )
}



export const getServerSideProps: GetServerSideProps<Props> = withSSRAuth(async (ctx) => {
    const cookies = parseCookies(ctx)

    const user = cookies['perfit.user']

    if(!user){
        return {
            redirect: {
                destination: '/signIn',
                permanent: false
            }
        }
    }

    const parsedUser = JSON.parse(user)

    return {
      props: {
        user: parsedUser
      }
    }
  })