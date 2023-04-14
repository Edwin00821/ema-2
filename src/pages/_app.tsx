import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import store from '@/redux/store'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    // <SessionProvider session={session}>
    <ThemeProvider enableSystem={true} attribute='class'>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
    // </SessionProvider>
  )
}
