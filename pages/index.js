import styles from '../styles/page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
        <h1>Hola Mundo</h1>
        <Link href="nosotros">Nosotros</Link>
    </>
  )
}
