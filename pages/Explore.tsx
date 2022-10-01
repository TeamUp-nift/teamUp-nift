import {useState, useEffect} from 'react'
import Image from 'next/image'
import { fetchData } from '../fetchData'


const explore = ({ data }) => {

   console.log(data);

     return (
        <div className="flex justify-center">
         <div className="px-4" style={{ maxWidth: '1600px'}}>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
               {/* <button onClick={connectWallet}>Get Data</button> */}
             {data.map(nft => {
               return (
               <div className="border shadow rounded-xl overflow-hidden">
                 <Image src={nft.image_url} width={100} height={100} />
                 <p>{nft.name}</p>
                 <p>{nft.token_id}</p>
                 <p>{nft.contract_address}</p>
               </div>);
             })}
             </div>
             </div>
          </div>
     )
}

export async function getServerSideProps(context) {
     const url = `https://ubiquity.api.blockdaemon.com/nft/v1/ethereum/mainnet/assets?contract_address=0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D&token_id=9998&sort_by=token_id&order=asc`
     
     const options = { method: "GET", headers: { 'Authorization': 'Bearer' + process.env.NEXT_PUBLIC_TOKEN } }
     const data = await fetchData(url, options)

     console.log('api:', data);

     return {
       props: {
          data: data.assets,
       }
     }
}

export default explore
