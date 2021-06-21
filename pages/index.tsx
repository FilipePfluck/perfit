import { Home } from '../src/screens/Home'

import { withSSRGuest } from '../src/utils/withSSRGuest'
import { GetServerSideProps } from 'next'

export default function HomePage() {
  return (
    <Home/>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {
      
    }
  }
})