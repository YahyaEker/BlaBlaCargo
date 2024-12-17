import './style.css'
import Image from 'next/image'
import photo from '../../../public/premium.jpeg'
import sagoo from '../../../public/sago.png'

const ImageSection = () =>{
    return(
        <div className='kafkef'>

            
            <Image src={sagoo} alt='photo' className='photo'/>


            <div className='about'>
            <h1>How do we work?</h1>

            <h2>We are the first social cargo search engine in Poland.</h2>

            <p>
            By registering on the blablacargo.com.pl platform you can earn or safely and cheaply send any item at any time. We connect drivers with people who want to send a shipment in the same direction.
            </p>

            <h3>See how simple and intuitive it is. We invite you to register for free.</h3>


            </div>


        </div>


    )

}
export default ImageSection