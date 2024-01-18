import { Layout } from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout
      title={'Venta de guitarras'}
      description={'Venta de guitarras, blog y musica'}
    >
        <h1>Hola Mundo</h1>
        <Link href="nosotros">Nosotros</Link>
    </Layout>
  )
}
