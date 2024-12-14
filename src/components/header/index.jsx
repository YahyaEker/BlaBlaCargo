import './style.css'
import Image from 'next/image';
import logo from '../../../public/pageLogo.png'
import Link from 'next/link';

const Header = () => {
  return (
    
    <div className='header'>
        <div className='logo'>
        <Link href={"/"}>
          <Image className='img' src={logo} alt="logo" />
        </Link> 
        </div>
        <div className='menu'>
            <ul>
                <li><a href="/regular-transfers">Regular Transfers</a></li>
                <li><a href="/send-a-package">Send a Package</a></li>
                <li><a href="/search-jobs">Search Jobs</a></li>
                <li><a href="/how-it-works">How It Works</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>
        <button><a href='/login'>Sing In/Up</a></button>
    </div>
  )
}

export default Header