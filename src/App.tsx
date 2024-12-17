import React from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <LanguageProvider>
        <Header />
        <Main />
        <Footer />
      </LanguageProvider>
    </>
  )
}

export default App
