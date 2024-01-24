import { Guitar } from '../components/guitar'
import { Layout } from '../components/layout'
import styles from '../styles/guitarras.module.css'

export default function Store({guitars}) {
  return (
    <Layout
    title={'Venta de guitarras'}
    description={'Venta de guitarras, blog y musica'}
    >
        <main className='contenedor'>
          <h1 className='heading'> Nuestra colecciòn</h1>
          <div className={styles.grid}>
            {
              guitars?.length > 0 
                ? guitars.map(guitar => <Guitar key={guitar.id} guitar ={ guitar }/>)
                : <p>No hay guitarras para mostrar</p>
            }
          </div>
        </main>
    </Layout>
  )
}



// export async function getStaticProps(){
//   try {
//     const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const {data} = await response.json();
//     return {
//       props: { data },
//     };
//   } catch (error) {
//     console.error('Fetch failed:', error.message);
//     return {
//       props: { error: 'Fetch failed' },
//     };
//   }
// }

export async function getServerSideProps(){
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  const { data } = await response.json();

  return {
    props: {
      guitars : data
    }
  }
}

