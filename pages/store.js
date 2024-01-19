import { Layout } from '../components/layout'
import Link from 'next/link'

export default function Store() {
  return (
    <Layout
      title={'Venta de guitarras'}
      description={'Venta de guitarras, blog y musica'}
    >
        <h1>Store</h1>
        <Link href="/">Inicio</Link>
    </Layout>
  )
}
