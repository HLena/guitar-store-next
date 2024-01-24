import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/guitarras.module.css'



export const Guitar= ({guitar}) => {
  const { name, description, price, url, image} = guitar.attributes;
  console.log(guitar.attributes)
  return (
    <div className={styles.guitarra}>
      <Image src={image.data.attributes.formats.medium.url} alt={`Imagen guitarra ${name}`} width={200} height={200}/>
      <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description[0].children[0].text}</p>
          <p className={styles.precio}>{price}</p>
          <Link className={styles.enlace} href={`/guitar/${url}`}>Ver Producto</Link>
      </div>
  </div>
  )
}
