import Image from 'next/image'
import logo from '../public/img/logo.svg'

export const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <Image src={logo} alt="logo" width={300} height={40}/>
      </div>
    </header>
  )
}
