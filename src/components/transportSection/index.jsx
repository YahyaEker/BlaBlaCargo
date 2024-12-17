import Image from "next/image"
import furniture from '../../../public/furniture.png'
import car from '../../../public/electric-car.png'
import assembly from '../../../public/assembly.png'
import pallets from '../../../public/wholesale.png'
import box from '../../../public/box.png'
import animals from '../../../public/animal-care.png'
import './style.css'
import Link from "next/link"

const TransporSection= () => {

    return(
        <div className="main">
            <h1>WHAT DO YOU WANT TO TRANSPORT?</h1>

            <div className="sub">
                <div className="box">
                <Link href={'/send-a-package'}>
                <Image src={furniture} alt="logo" className="sago"/>
                <p className="text">furniture</p>
                </Link>
            </div>
            <div className="box">
                <Link href={'/send-a-package'}>
                <Image src={car} alt="logo" className="sago"/>
                <p className="text">CARS, MOTORCYCLES, PARTS</p>
                </Link>
            </div>
            <div className="box">
            <Link href={'/send-a-package'}>
            <Image src={assembly} alt="logo" className="sago"/>
                <p className="text">NON-STANDARD LOADS</p>
                </Link>
            </div>
            <div className="box">
            <Link href={'/send-a-package'}>
            <Image src={pallets} alt="logo" className="sago"/>
            </Link>
            <p className="text">PALLETS</p>
            </div>
            <div className="box">
            <Link href={'/send-a-package'}>
            <Image src={box} alt="logo" className="sago"/>
            <p className="text">DONUTS</p>
            </Link>
            </div>
            <div className="box">
            <Link href={'/send-a-package'}>
            <Image src={animals} alt="logo" className="sago"/>
            <p className="text">ANIMALS</p>
            </Link>
            </div>
            </div>
            




        </div>
    )
}

export default TransporSection