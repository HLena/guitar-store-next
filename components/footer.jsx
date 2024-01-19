import Link from "next/link";
import styles from '../styles/footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
      <nav className={styles.navegacion}>
          <Link 
            href="/" className={''}> Inicio 
          </Link>
          <Link 
            href="/nosotros" className="" > Nosotros 
          </Link>
          <Link 
            href="/blog" className=""> Blog 
          </Link>
          <Link 
            href="/store" className=""> Tienda 
          </Link>
        </nav>

        <p className={styles.copyright}>Todos los derechos reservados { new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
