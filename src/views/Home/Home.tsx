import { FC } from 'react'
import {
  Banner,
  Philosophy,
  Mision,
  Objectives,
  Footer,
  Layout
} from './components'
import { HomeProvider } from './context'

const Home: FC = () => {
  return (
    <>
      <HomeProvider>
        <Layout
          title='EMA'
          description='EMA es una empresa desarrollada por alumnos del Cecyt9 para ayudar a los estudaintes con su aprendizaje escolar'
          isHome
        >
          <main
            className='relative min-h-screen bg-primary-light py-8 px-12 dark:bg-tertiary '
            id={'home'}
          >
            <Banner />
            <Philosophy />
            <Mision />
            <Objectives />
          </main>
          <Footer />
        </Layout>
      </HomeProvider>
    </>
  )
}

export default Home
