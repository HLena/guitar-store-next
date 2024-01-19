import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/img/logo.svg'
import styles from '../styles/header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Image src={logo} alt="logo" width={300} height={40}/>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/store">Tienda</Link>
        </nav>
      </div>
    </header>
  )
}
