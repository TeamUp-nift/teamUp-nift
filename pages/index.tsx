import {useState, useEffect} from 'react'
// import { NextPage } from "next"
import { useRouter } from 'next/router'
import Image from 'next/image'
// import Navbar from '../components/nav/Navbar'
import Home from './Home'
import Footer from '../components/footer/Footer'
import styles from './index.module.scss'
import NiftLogo from '../assets/Logo.png'
import ConnectionButton from '../components/ConnectionButton'
import { client } from '../utils/sanityClient'
import toast, { Toaster } from 'react-hot-toast'

const HomePage = () => {

  const [address, setAddress] = useState<any | null>();
  const router = useRouter();

  const welcomeValidOwnerAddress = (userName, toastHandler = toast) : any => {
    toastHandler.success(
      `Welcome to back Nift NFT Martketplace ${userName === 'Unamed' ? `${userName}` : '' }`,
      {
        style: {
          background: '#FFFFFF',
          color: '#04091E',
        }
      }
    )
  }

  /**
   * @dev - When the user logs in our Marketplace, the function below will send user details
   * to our Sanity database which is the backend database that we use for this project
   */

   useEffect(() => {
    if (!address) return
    (async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      //This will tell Sanity backend to store this informations
      const res = await client.createIfNotExists(userDoc);

      welcomeValidOwnerAddress(res.userName)
    })()

   }, [address])

  //  ;(() => console.log('hello nift testing this'))()
 
  return (
    <div className={styles.wrapper}>
      {/* Toaster Component is a notification that will tell the user Welcome to Nift */}
      <Toaster
       position="top-center"
       reverseOrder={false}
       />
      {address ? (
      <>
      {/* <Navbar/> */}
      <Home />
      <Footer />
      </>
          ): (
            <div className={styles.wrapperContainer}>
            <div className={styles.wrapperContent}>
            <div className={styles.welcomeDetails}>

              <div>
                <h3 className={styles.title}>Welcome</h3>
               <h3 className={styles.title}>To</h3>
               <h1 className={styles.title}>NIFT</h1>
              </div>
             
              <div>
                 <p className={styles.desc}>This is Nift NFT MarketPlace. Power by Ubiquity API. Brought to you by <strong>TeamUp</strong></p>
              </div>

              <button className={styles.button}
              onClick={() => setAddress('appName')}
              >
              <ConnectionButton />
            </button>

            </div>
            </div>
            </div>
          )
      }
    </div>
  )
}

export default HomePage

