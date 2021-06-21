import { UpdateProfile } from "../src/screens/UpdateProfile";

import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { withSSRAuth } from '../src/utils/withSSRAuth'

export default function UpdateProfilePage() {
  return <UpdateProfile />;
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
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