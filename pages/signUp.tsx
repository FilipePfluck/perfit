import { SignUp } from '../src/screens/SignUp'

import { withSSRGuest } from '../src/utils/withSSRGuest'
import { GetServerSideProps } from 'next'

export default function SignUpPage(){
    return(
        <SignUp/>
    )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async (ctx) => {
    return {
      props: {
        
      }
    }
  })