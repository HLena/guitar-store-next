import Link from 'next/link'
import { Layout } from '../components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'


export default function Nosotros()  {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, GuitarLs, tienda de mùsica'}
    >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>
              <Image 
                src="/img/nosotros.jpg" 
                width={1000}
                height={800}
                alt ="Imagen sobre nosotros"/>
              <div>
                <p>
                Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. 

                </p>
              </div>
          </div>
        </main>
        <Link href="/">Inicio</Link>
    </Layout>
  )
}
