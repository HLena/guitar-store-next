import Link from 'next/link'
import { Layout } from '../components/layout'
export default function Nosotros()  {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, GuitarLs, tienda de mùsica'}
    >
        <div>nosotros</div>
        <Link href="/">Inicio</Link>
    </Layout>
  )
}
