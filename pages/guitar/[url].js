import { Layout } from "../../components/layout";
import Image from "next/image";

import styles from '../../styles/guitarras.module.css'


const Product = ({guitar}) => {
    const {image, name, price, description, url} = guitar.attributes;
    
    return (
        <Layout
        title={`Guitarra ${name}`}
      >
          <main className={styles.guitarra}>
            <Image  src={image.data.attributes.url} alt={`Imagen de la guitarra ${url}-`} width={300} height={400}/>
            <div className={styles.contenido}>
                <h3 >{name}</h3>
                <p className={styles.description}>{description[0].children[0].text}</p>
                <p className={styles.precio}>$ {price}</p>
            </div>
        </main>
      </Layout>
    )
}

export async function getStaticPaths(){
    const response = await fetch(`${process.env.API_URL}/guitars`);
    const { data } = await response.json();
  
    const paths = data.map(guitar => ({
        params:{
            url: guitar.attributes.url
        }
    }))

    console.log(paths)
    return {
      paths,
      fallback: false
    }
  }


export async function getStaticProps({params : {url}}){
    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`);
    const { data } = await response.json();
  
    return {
      props: {
        guitar : data[0]
      }
    }
}
// export async function getServerSideProps({query : {url}}){
//     const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`);
//     const { data } = await response.json();
  
//     return {
//       props: {
//         guitar : data[0]
//       }
//     }
//   }

export default Product