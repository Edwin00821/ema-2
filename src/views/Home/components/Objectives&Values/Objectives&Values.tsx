import { FC, useEffect, useRef } from 'react'
import { useNearScreen } from '@/hooks'
import { useHomeContext } from '../../hooks'

import { Slider, Slide } from '@/components'
import { Paragraph } from '../'
import Image from 'next/image'
import { CLOUDINARY_URL } from '@/libs'

const Objectives: FC = () => {
  const refObj = useRef(null)
  const { setIsObjectivesNearScreen } = useHomeContext()

  const { isNearScreen } = useNearScreen({
    externalRef: refObj,
    once: false
  })

  useEffect(() => {
    setIsObjectivesNearScreen(isNearScreen)
  }, [isNearScreen])
  return (
    <section
      id='objetivos'
      className='m-auto h-screen max-w-screen-2xl pt-32'
      ref={refObj}
    >
      <div className='flex content-center justify-center'>
        <h1 className='m-4 mb-12 text-center text-3xl font-bold dark:text-white md:text-5xl lg:text-6xl xl:text-5xl xl:leading-[4.5rem]'>
          OBJETIVOS Y VALORES DEL PROYECTO
        </h1>
      </div>
      <div className='mt-1 grid grid-cols-1 items-center justify-center pt-28 md:px-8 lg:grid-cols-2'>
        <div className='flex items-center justify-center'>
          <div className='hidden items-center justify-center lg:flex'>
            <Image
              className='w-full object-cover'
              src={`${CLOUDINARY_URL}/App/Objetivos.png`}
              alt='Next.js Logo'
              width={415}
              height={315}
              priority
            />
          </div>
        </div>
        <Slider controls={true}>
          <Slide>
            <div className='flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 px-5 shadow-md hover:bg-gray-100 dark:border-tertiary-light dark:bg-tertiary dark:hover:bg-tertiary-light'>
              <h5 className='mb-2 w-full text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                OBJETIVOS:
              </h5>
              <div className='w-full px-5'>
                <Paragraph title='-Conservar los valores fundamentales de la empresa.' />
                <Paragraph title='-Alcanzar mayor productividad.' />
                <Paragraph title='-Implantarse en el mercado.' />
                <Paragraph
                  title='-Entrar al mercado con software innovador, con margen de éxito
                  sostenible.'
                />
              </div>
            </div>
          </Slide>
          <Slide>
            <div className='flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:bg-gray-100 dark:border-tertiary-light dark:bg-tertiary dark:hover:bg-tertiary-light'>
              <div className='w-full px-5'>
                <Paragraph
                  title=' -Formar estrategias que permitan la consecución de los
                objetivos definidos para llevarlos a cabo.'
                />
                <Paragraph
                  title='-Sumar conocimientos nuevos para ser mejores programadores y
                personas.'
                />
              </div>
            </div>
          </Slide>
          <Slide>
            <div className='flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-tertiary-light dark:bg-tertiary dark:hover:bg-tertiary-light'>
              <h5 className='mb-2 w-full text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                VALORES:
              </h5>
              <div className='flex flex-col items-center justify-center'>
                <div>
                  <Paragraph title='+Respeto.' />
                  <Paragraph title='+Responsabilidad.' />
                  <Paragraph title='+Honestidad.' />
                  <Paragraph title='+Compromiso.' />
                  <Paragraph title='+Trabajo en equipo.' />
                  <Paragraph title='+Innovación.' />
                </div>
              </div>
            </div>
          </Slide>
          <Slide>
            <div className='flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 px-5 shadow-md hover:bg-gray-100 dark:border-tertiary-light dark:bg-tertiary dark:hover:bg-tertiary-light'>
              <div className='flex flex-col items-center justify-center'>
                <div>
                  <Paragraph title='+Cargo de conciencia social.' />
                  <Paragraph title='+Perfeccionamiento continúo.' />
                  <Paragraph title='+Certeza.' />
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
      </div>
    </section>
  )
}

export default Objectives
