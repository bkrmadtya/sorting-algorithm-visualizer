import React from 'react';
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import '../styles/global.scss'
import store from '../store'

import { NavBar } from '../components/shared';
import Link from 'next/link';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <NavBar>
        <Link href='/'>Algorithms</Link>
        <Link href='/'>About</Link>
      </NavBar>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;