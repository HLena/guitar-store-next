import { Layout } from '../components/layout'
import Link from 'next/link'

export default function Blog() {
  return (
    <Layout
      title={'Venta de guitarras'}
      description={'Blog de musica, venta de guitarras, consejos, GuitarLa'}
    >
        <h1>Blog</h1>
        <Link href="/">Inicio</Link>
    </Layout>
  )
}
