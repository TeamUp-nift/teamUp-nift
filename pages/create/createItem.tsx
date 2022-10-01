import React, { useState } from 'react'
import { ethers, BigNumber } from 'ethers'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import styles from './create.module.scss'
import { nftAddress,nftMarketAddress} from '../../config';
import nftAbi from '../../abi.json'
import { EtherscanProvider } from '@ethersproject/providers'
import Image from 'next/image'
import { create } from 'ipfs-http-client';


const projectId = process.env.NEXT_PUBLIC_IPFS_PROJECT_ID;
const projectSecret = process.env.NEXT_PUBLIC_PROJECT_SECRET;
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});

export default function CreateItem() {
    const [fileUrl, setFileUrl] = useState<any | null>(null)
    const [formInput, updateFormInput] = useState({price: '', name: '', description:''})
    const router = useRouter();

    async function onChange(e) {
        const file = e.target.files[0]
        try{ //try uploading the file
            const added = await ipfs.add(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            )
            //file saved in the url path below
            const url = `https://infura-ipfs.io/ipfs/${added.path}`
            setFileUrl(url)
        }catch(e){
            console.log('Error uploading file: ', e)
        }
    }

    //1. create item (image/video) and upload to ipfs
    async function createItem(){
        const {name, description, price} = formInput; //get the value from the form input
        
        //form validation
        if(!name || !description || !price || !fileUrl) {
            return
        }

        const data = JSON.stringify({
            name, description, image: fileUrl
        });

        try{
            const added = await ipfs.add(data)
            const url = `https://infura-ipfs.io/ipfs/${added.path}`
            //pass the url to sav eit on Polygon adter it has been uploaded to IPFS
            createlistedToken(url, price)
        }catch(error){
            console.log(`Error uploading file: `, error)
        }
    }

    //2. List item for sale
    async function createlistedToken(url, price){
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        //sign the transaction
        const signer = provider.getSigner();
        let contract = new ethers.Contract(nftMarketAddress, nftAbi, signer);
        var transaction = await contract.createToken(url, price);
        let tx = await transaction.wait()

        //get the tokenId from the transaction that occured above
        //there events array that is returned, the first item from that event
        //is the event, third item is the token id.
        console.log('Transaction: ', tx)
        console.log('Transaction events: ',tx.events[0])
        let event = tx.events[0]
        let value = event.args[2]
        let tokenId = value.toNumber() //we need to convert it a number
        
         const decimals = 18;
        //get a reference to the price entered in the form 
        const tokenPrice = ethers.utils.parseUnits(formInput.price, decimals)

        contract = new ethers.Contract(nftMarketAddress, nftAbi, signer);

        //get the listing price
        let listingPrice = await contract.seeListingPrice()
        listingPrice = listingPrice.toString()

        transaction = await contract.currentListedToken(
            nftAddress, tokenId, tokenPrice, { value: listingPrice }
        )

        await transaction.wait()

        router.push('/explore/[exporeId]')
    }

    return (
        <div className={styles.container}>
        <div className="flex justify-center">
            <div className="w-1/2 flex flex-col pb-12">
                <input 
                    placeholder="Your Asset Name"
                    className="mt-8 border-none outline-none rounded p-4"
                    onChange={e => updateFormInput({...formInput, name: e.target.value})}
                    />
                <textarea
                     placeholder="Your Asset description"
                     className="mt-2 border-none outline-none rounded p-4"
                     onChange={e => updateFormInput({...formInput, description: e.target.value})}
                     />
                <input 
                    placeholder="Fixed Asset Price in Eth"
                    className="mt-8 border-none outline-none rounded p-4"
                    type="number"
                    onChange={e => updateFormInput({...formInput, price: e.target.value})}
                    />
                    <input
                        type="file"
                        name="Asset"
                        className="my-4"
                        onChange={onChange}
                    />
                    {
                        fileUrl && (
                           
                            <Image
                            src={fileUrl}
                            alt="Picture of the author"
                            className="rounded mt-4"
                            width={350}
                            height={500} 
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                          />
                        )
                    }
                    <button onClick={createItem}
                     className="cursor-pointer font-medium mt-4 bg-gradient-to-r from-[#FCAD02] to-[#FF0041] text-white rounded-full p-4 shadow-lg"
                     >
                        Create your NFT
                    </button>
            </div>
        </div>
        </div>
    )
}