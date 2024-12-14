import './Footer.css'
import Image from 'next/image';
import youtube_icon from '../../../public/youtube_icon.png';
import twitter_icon from '../../../public/twitter_icon.png';
import instagram_icon from '../../../public/instagram_icon.png';
import facebook_icon from '../../../public/facebook_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='mainList'>
      <div className='list'>
        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
        </ul> 
      </div>
      <div>
        <ul>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
      </div>
      </div>

      <div className='sagopa'>
        <div className="footer-icons">
          <Image src={facebook_icon} alt="Facebook" />
          <Image src={instagram_icon} alt="Instagram" />
          <Image src={twitter_icon} alt="Twitter" />
          <Image src={youtube_icon} alt="YouTube" />
        </div>

        <div className='copyright-text'>© 1997-2023 BlaBlaCargo, Inc.</div>
      </div>
      


    </div>
  )
}

export default Footer