import Head from "next/head"
import { Footer } from "./footer"
import { Header } from "./header"


export const Layout = ({children, title = '', description = ''}) => {
  return (
    <>
        <Head>
          <title>{`GuitarLa - ${title}`}</title>
          <meta name="description" content={description}/>
        </Head>
        <Header/>
          {children}
        <Footer/>
    </>
  )
}
