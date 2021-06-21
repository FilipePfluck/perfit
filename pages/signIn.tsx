import { SignIn } from '../src/screens/SignIn'

import { withSSRGuest } from '../src/utils/withSSRGuest'
import { GetServerSideProps } from 'next'

export default function SignInPage(){
    return(
        <SignIn/>
    )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async (ctx) => {
    return {
      props: {
        
      }
    }
  })