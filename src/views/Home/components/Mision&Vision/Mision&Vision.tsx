import { FC, useEffect, useRef } from 'react'
import { useNearScreen } from '@/hooks'
import { useHomeContext } from '../../hooks'
import { CLOUDINARY_URL } from '@/libs'
import Image from 'next/image'

const Mision: FC = () => {
  const refMission = useRef(null)
  const { setIsMissionNearScreen } = useHomeContext()

  const { isNearScreen } = useNearScreen({
    externalRef: refMission,
    once: false
  })

  useEffect(() => {
    setIsMissionNearScreen(isNearScreen)
  }, [isNearScreen])

  return (
    <section
      id='mision'
      className='flex h-screen w-full flex-col items-center justify-center'
      ref={refMission}
    >
      <div className='flex content-center justify-center pt-10'>
        <h1 className='m-4 text-center text-3xl font-bold dark:text-white md:text-5xl lg:text-6xl xl:text-5xl xl:leading-[4.5rem]'>
          MISION Y VISIÓN DEL PROYECTO
        </h1>
      </div>
      <div className='-mt-24 grid min-h-screen grid-cols-1 md:px-8 lg:grid-cols-2'>
        <div className='flex items-center justify-center'>
          <div className='hidden h-1/2 items-center justify-center lg:flex'>
            <Image
              className='w-full object-cover'
              src={`${CLOUDINARY_URL}/App/Mision.png`}
              alt='Next.js Logo'
              width={415}
              height={315}
              priority
            />
          </div>
        </div>

        <div className='flex content-center justify-center'>
          <div className='flex items-center justify-center p-8 md:col-span-5 xl:p-16'>
            <div className='flex flex-col gap-8'>
              <p className='text-dark-500 text-center text-xl leading-relaxed dark:text-gray-300 md:text-xl '>
                <span className='mb-2 text-center text-xl font-bold'>
                  MISIÓN:
                </span>
                <br />
                Presentar software que cumpla con las necesidades de los
                usuarios, al mismo tiempo de ser líderes en la figura para hacer
                negocios socialmente responsables.
              </p>
            </div>
          </div>
        </div>

        <div className='flex content-center justify-center'>
          <div className='flex max-h-52 items-center justify-center p-8 md:col-span-5 xl:p-16'>
            <div className='flex flex-col gap-8'>
              <p className='text-dark-500 text-center text-xl leading-relaxed dark:text-gray-300 md:text-xl '>
                <span className='mb-2 text-center text-xl font-bold'>
                  VISIÓN:
                </span>
                <br />
                Ofrecer software e innovar la forma en que aprendemos.
              </p>
            </div>
          </div>
        </div>

        <div className='max-w-sm overflow-hidden rounded px-8'>
          <div className='hidden h-3/4 items-center justify-center lg:flex'>
            <Image
              className='w-full object-cover'
              src={`${CLOUDINARY_URL}/App/Vision.png`}
              alt='Next.js Logo'
              width={415}
              height={315}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mision
