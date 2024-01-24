import Link from 'next/link'
import { Layout } from '../components/layout'



const Page404 = () => {
  return (
    <Layout title='Página no encontrada'>
        <p className='error'>Pàgina no encontrada</p>
        <Link href="/" className='error-enlace'>
            Ir a Inicio
        </Link>
    </Layout>
  )
}

export default Page404