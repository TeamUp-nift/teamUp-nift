
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/nav/Navbar'
import Home from './Home'
import Footer from '../components/footer/Footer'

const HomePage: NextPage = () => {
  return (
    <div className="">
      <Navbar/>
      <Home />
      <Footer />
    </div>
  )
}

export default HomePage

