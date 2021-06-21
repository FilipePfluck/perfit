import { QueryClientProvider, QueryClient } from 'react-query'
import { queryClient } from '../src/services/queryClient'

import { AuthProvider } from '../src/contexts/AuthContext'
import { ThemeProvider } from '../src/contexts/ThemeContext'

import GlobalStyle from '../src/styles/global'



export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <GlobalStyle /> 
            <Component {...pageProps} />
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

